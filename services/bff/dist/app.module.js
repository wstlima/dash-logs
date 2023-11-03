"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const sequelize_config_service_1 = require("./core/sequelize/sequelize.config.service");
const sequelizemultitenantmodule_1 = require("sequelizemultitenantmodule");
const sequelize_module_1 = require("./core/sequelize/sequelize.module");
const logs_service_1 = require("./resources/logs/services/logs.service");
const logs_providers_1 = require("./resources/logs/providers/logs.providers");
const logs_module_1 = require("./resources/logs/modules/logs.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelizemultitenantmodule_1.SequelizeMultiTenantModule.forRootAsync({
                imports: [sequelize_module_1.SequelizeConfigModule],
                useExisting: sequelize_config_service_1.SequelizeConfigService,
            }),
            logs_module_1.LogsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            logs_service_1.LogsService, ...logs_providers_1.logsProviders,
            sequelize_config_service_1.SequelizeConfigService,
        ],
        exports: [
            app_service_1.AppService,
            logs_service_1.LogsService,
            sequelize_config_service_1.SequelizeConfigService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
