import fs from 'fs';
import util from 'util';
import { lineIsValid } from './validation';

export const readLogFiles = async (dirname: string) => {
    try {
        const readdir = util.promisify(fs.readdir);
        const readFile = util.promisify(fs.readFile);
        const filenames = await readdir(dirname);
        const files_promise = filenames.map((filename: any) => {
            return readFile(dirname + filename, 'utf-8');
        });
        const response = await Promise.all(files_promise);
        const filesContent = filenames.reduce((accumlater: { [x: string]: { content: any; }; }, filename: string | number, currentIndex: string | number) => {
            const content = response[currentIndex];
            accumlater[filename] = { content };
            return accumlater;
        }, {});
        return { filesContent, filenames }
    } catch (error) {
        throw error;
    }
};

export const loadLogFiles = async (repository: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            const responseFiles = await readLogFiles('data/logs/');
            let count = 0;
            responseFiles['filenames'].forEach((file: any, index: number) => {
                const text = responseFiles['filesContent'][file].content;
                const textByLine = text.split("\n");
                textByLine.forEach(async (line: string) => {
                    const fields = line.split(';')
                    const strDate = `${fields[1]} ${fields[2]}`;
                    const hash = `${fields[0]}${fields[5]}${fields[1]}${fields[2]}`;
                    if (lineIsValid(fields)) {
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
                        }
                        const item = await repository.findOne({ where: { hash } });
                        if (!item) {
                            await repository.create(payload);
                            count++;
                        }
                    }
                });
            });
            resolve(count);
        } catch (error) {
            reject(error);
        }
    })
}


