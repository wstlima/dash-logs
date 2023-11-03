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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsDtoLoadResponse = exports.LogsDtoFoundResponse = exports.LogsDtoNoContentResponse = exports.LogsDtoInternalError = exports.LogsDtoUpdate = exports.LogsDtoCreate = exports.LogsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
class LogsDto {
}
exports.LogsDto = LogsDto;
class LogsDtoCreate extends (0, mapped_types_1.PartialType)(LogsDto) {
}
exports.LogsDtoCreate = LogsDtoCreate;
class LogsDtoUpdate extends (0, mapped_types_1.PartialType)(LogsDto) {
}
exports.LogsDtoUpdate = LogsDtoUpdate;
class LogsDtoInternalError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Not null', description: 'Erro' }),
    __metadata("design:type", String)
], LogsDtoInternalError.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Internal Server Error!', description: 'Mensagem' }),
    __metadata("design:type", String)
], LogsDtoInternalError.prototype, "error", void 0);
exports.LogsDtoInternalError = LogsDtoInternalError;
class LogsDtoNoContentResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'The request not found events in database', description: 'Detalhes do erro' }),
    __metadata("design:type", String)
], LogsDtoNoContentResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Error', description: 'Status da requisição' }),
    __metadata("design:type", String)
], LogsDtoNoContentResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0', description: 'Eventos retornados' }),
    __metadata("design:type", Number)
], LogsDtoNoContentResponse.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [], description: 'Lista de eventos' }),
    __metadata("design:type", Array)
], LogsDtoNoContentResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'No Content Response!', description: 'Tipo do erro' }),
    __metadata("design:type", String)
], LogsDtoNoContentResponse.prototype, "error", void 0);
exports.LogsDtoNoContentResponse = LogsDtoNoContentResponse;
class LogsDtoFoundResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'The request has retrieve succeeded.', description: 'Mensagem' }),
    __metadata("design:type", String)
], LogsDtoFoundResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'OK', description: 'Status da requisição' }),
    __metadata("design:type", String)
], LogsDtoFoundResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5247', description: 'Eventos retornados' }),
    __metadata("design:type", Number)
], LogsDtoFoundResponse.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [{
                "id": 1,
                "hash": "147.8.118.215662791006-305-Mar-20223:03:04.000",
                "ip": "147.8.118.215",
                "identify": "Zaam-Dox",
                "identifyId": "152556033-6",
                "version": "0.8.7",
                "definition": "Multi-tiered static extranet",
                "description": "felis eu sapien cursus vestibulum proin eu mi nulla ac enim",
                "fileName": "AccessLogs (1).log",
                "eventAt": "2022-09-07 13:25:48.000 +00:00",
                "createdAt": "2022-09-07 13:25:48.000 +00:00"
            }],
        description: 'Lista de eventos'
    }),
    __metadata("design:type", Array)
], LogsDtoFoundResponse.prototype, "items", void 0);
exports.LogsDtoFoundResponse = LogsDtoFoundResponse;
class LogsDtoLoadResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'The process started in the background, wait a few moments to perform queries!', description: 'Mensagem' }),
    __metadata("design:type", String)
], LogsDtoLoadResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'OK', description: 'Status da requisição' }),
    __metadata("design:type", String)
], LogsDtoLoadResponse.prototype, "status", void 0);
exports.LogsDtoLoadResponse = LogsDtoLoadResponse;
