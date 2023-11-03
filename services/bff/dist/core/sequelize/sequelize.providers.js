"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeProviders = void 0;
const constants_1 = require("../constants");
const sequelize_config_service_1 = require("./sequelize.config.service");
exports.sequelizeProviders = [{
        provide: constants_1.SEQUELIZE,
        useFactory: async (sequelizeConfigService) => { },
        inject: [sequelize_config_service_1.SequelizeConfigService],
        exports: [sequelize_config_service_1.SequelizeConfigService],
    }];
