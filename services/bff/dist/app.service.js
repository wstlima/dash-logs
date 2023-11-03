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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_config_service_1 = require("./core/sequelize/sequelize.config.service");
const logs_entity_1 = require("./resources/logs/entities/logs.entity");
let AppService = class AppService {
    constructor(sequelizeConfigService) {
        this.sequelizeConfigService = sequelizeConfigService;
        this.tenantStarted = false;
        this.tables = ["Tenant", "Settings"];
        this.sqliteSync('dash_log_db', true);
    }
    async sqliteSync(dbKey, sync = false) {
        return this.sequelizeConfigService.databaseCreate([logs_entity_1.Logs], dbKey, sync);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [sequelize_config_service_1.SequelizeConfigService])
], AppService);
exports.AppService = AppService;
