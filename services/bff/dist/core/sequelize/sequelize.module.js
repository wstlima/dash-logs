"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SequelizeConfigModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeConfigModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_config_service_1 = require("./sequelize.config.service");
const sequelizemultitenantmodule_1 = require("sequelizemultitenantmodule");
const sequelize_providers_1 = require("./sequelize.providers");
let SequelizeConfigModule = SequelizeConfigModule_1 = class SequelizeConfigModule {
};
SequelizeConfigModule = SequelizeConfigModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelizemultitenantmodule_1.SequelizeMultiTenantModule.forRootAsync({
                imports: [SequelizeConfigModule_1],
                useExisting: sequelize_config_service_1.SequelizeConfigService,
                inject: [sequelize_config_service_1.SequelizeConfigService],
            }),
        ],
        providers: [
            sequelize_config_service_1.SequelizeConfigService,
            sequelize_providers_1.sequelizeProviders[0],
        ],
        exports: [sequelizemultitenantmodule_1.SequelizeMultiTenantModule, sequelize_config_service_1.SequelizeConfigService],
    })
], SequelizeConfigModule);
exports.SequelizeConfigModule = SequelizeConfigModule;
