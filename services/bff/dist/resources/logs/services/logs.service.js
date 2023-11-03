"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../../core/constants");
const app_service_1 = require("../../../app.service");
const log_files_reader_1 = require("../../../utils/log-files-reader");
let LogsService = class LogsService {
    constructor(itemRepository, appService) {
        this.itemRepository = itemRepository;
        this.appService = appService;
        this.appService.sqliteSync('dash_log_db', true);
    }
    async loadLogFiles() {
        await this.appService.sqliteSync('dash_log_db', true);
        return await (0, log_files_reader_1.loadLogFiles)(this.itemRepository);
    }
    async findAll() {
        try {
            await this.appService.sqliteSync('dash_log_db', true);
            return await this.itemRepository.findAll();
        }
        catch (error) {
            throw error;
        }
    }
};
LogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.LOGS_REPOSITORY)),
    __metadata("design:paramtypes", [Object, app_service_1.AppService])
], LogsService);
exports.LogsService = LogsService;
