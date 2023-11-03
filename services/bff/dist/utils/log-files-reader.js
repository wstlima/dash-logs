"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadLogFiles = exports.readLogFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const util_1 = __importDefault(require("util"));
const validation_1 = require("./validation");
const readLogFiles = async (dirname) => {
    try {
        const readdir = util_1.default.promisify(fs_1.default.readdir);
        const readFile = util_1.default.promisify(fs_1.default.readFile);
        const filenames = await readdir(dirname);
        const files_promise = filenames.map((filename) => {
            return readFile(dirname + filename, 'utf-8');
        });
        const response = await Promise.all(files_promise);
        const filesContent = filenames.reduce((accumlater, filename, currentIndex) => {
            const content = response[currentIndex];
            accumlater[filename] = { content };
            return accumlater;
        }, {});
        return { filesContent, filenames };
    }
    catch (error) {
        throw error;
    }
};
exports.readLogFiles = readLogFiles;
const loadLogFiles = async (repository) => {
    return new Promise(async (resolve, reject) => {
        try {
            const responseFiles = await (0, exports.readLogFiles)('data/logs/');
            let count = 0;
            responseFiles['filenames'].forEach((file, index) => {
                const text = responseFiles['filesContent'][file].content;
                const textByLine = text.split("\n");
                textByLine.forEach(async (line) => {
                    const fields = line.split(';');
                    const strDate = `${fields[1]} ${fields[2]}`;
                    const hash = `${fields[0]}${fields[5]}${fields[1]}${fields[2]}`;
                    if ((0, validation_1.lineIsValid)(fields)) {
                        const payload = {
                            hash,
                            ip: fields[0],
                            identify: fields[3],
                            version: fields[4],
                            identifyId: fields[5],
                            definition: fields[6],
                            description: fields[7],
                            fileName: responseFiles['filenames'][index],
                            eventAt: new Date(Date.parse(strDate.replace(/-/g, " ")))
                        };
                        const item = await repository.findOne({ where: { hash } });
                        if (!item) {
                            await repository.create(payload);
                            count++;
                        }
                    }
                });
            });
            resolve(count);
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.loadLogFiles = loadLogFiles;
