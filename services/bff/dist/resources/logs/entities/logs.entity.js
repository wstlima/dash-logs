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
exports.Logs = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
let Logs = class Logs extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.INTEGER, autoIncrement: true, allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID na base de dados' }),
    __metadata("design:type", Number)
], Logs.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: '147.8.118.215662791006-305-Mar-20223:03:04.000', description: 'Chave Composta' }),
    __metadata("design:type", String)
], Logs.prototype, "hash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: '147.8.118.215', description: 'Host IP' }),
    __metadata("design:type", String)
], Logs.prototype, "ip", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 'Zaam-Dox', description: 'Ofensor' }),
    __metadata("design:type", String)
], Logs.prototype, "identify", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: '152556033-6', description: 'Ofensor ID' }),
    __metadata("design:type", String)
], Logs.prototype, "identifyId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: '0.8.7', description: 'Ofensor Versão' }),
    __metadata("design:type", String)
], Logs.prototype, "version", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 'Multi-tiered static extranet', description: 'Ofensor Atuação' }),
    __metadata("design:type", String)
], Logs.prototype, "definition", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 'felis eu sapien cursus vestibulum proin eu mi nulla ac enim', description: 'Ofensor Descrição' }),
    __metadata("design:type", String)
], Logs.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 'AccessLogs (1).log', description: 'Arquivo de origem' }),
    __metadata("design:type", String)
], Logs.prototype, "fileName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, allowNull: false, defaultValue: sequelize_typescript_1.DataType.NOW }),
    (0, swagger_1.ApiProperty)({ example: '2022-09-07 13:25:48.000 +00:00', description: 'Data do evento' }),
    __metadata("design:type", Date)
], Logs.prototype, "eventAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, allowNull: false, defaultValue: sequelize_typescript_1.DataType.NOW }),
    (0, swagger_1.ApiProperty)({ example: '2022-09-07 13:25:48.000 +00:00', description: 'Data de carregamento' }),
    __metadata("design:type", Date)
], Logs.prototype, "createdAt", void 0);
Logs = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "logs", timestamps: true })
], Logs);
exports.Logs = Logs;
