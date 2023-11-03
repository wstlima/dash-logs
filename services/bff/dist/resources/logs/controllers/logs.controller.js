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
exports.LogsController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const logs_service_1 = require("../services/logs.service");
const logs_dto_1 = require("../dto/logs.dto");
let LogsController = class LogsController {
    constructor(logsService) {
        this.logsService = logsService;
    }
    async findAll(res) {
        try {
            const items = await this.logsService.findAll();
            const count = items.length;
            if (count > 0) {
                return res.status(200).json({
                    status: "OK",
                    message: `The request has retrieve succeeded.`,
                    count,
                    items
                });
            }
            else {
                return res.status(200).json({
                    status: "Error",
                    message: `The request not found events in database`,
                    count: 0,
                    items: [],
                    error: "No Content Response!"
                });
            }
        }
        catch (error) {
            return res.status(500).json({
                message: error.message,
                error: "Internal Server Error!"
            });
        }
    }
    async loadLogFiles(res) {
        try {
            await this.logsService.loadLogFiles();
            return res.status(200).json({
                status: "OK",
                message: `The process started in the background, wait a few moments to perform queries!`,
            });
        }
        catch (error) {
            return res.status(500).json({
                statusCode: 500,
                status: "Error",
                message: error.message,
                error: "Internal Server Error"
            });
        }
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Retrieve logs from database" }),
    (0, swagger_1.ApiOkResponse)({ status: 200, description: "The request has succeeded.", type: logs_dto_1.LogsDtoFoundResponse }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ status: 500, description: "Internal Server Error!", type: logs_dto_1.LogsDtoInternalError }),
    (0, swagger_1.ApiDefaultResponse)({ status: 200, description: "No Content Response", type: logs_dto_1.LogsDtoNoContentResponse }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LogsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Start the loading process" }),
    (0, swagger_1.ApiOkResponse)({ status: 200, description: "The request for process started has succeeded.", type: logs_dto_1.LogsDtoLoadResponse }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ status: 500, description: "Internal Server Error!", type: logs_dto_1.LogsDtoInternalError }),
    (0, common_1.Get)('/load'),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LogsController.prototype, "loadLogFiles", null);
LogsController = __decorate([
    (0, swagger_1.ApiTags)("logs"),
    (0, common_1.Controller)('logs'),
    __metadata("design:paramtypes", [logs_service_1.LogsService])
], LogsController);
exports.LogsController = LogsController;
