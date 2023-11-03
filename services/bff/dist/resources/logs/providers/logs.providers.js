"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logsProviders = void 0;
const constants_1 = require("../../../core/constants");
const logs_entity_1 = require("../entities/logs.entity");
exports.logsProviders = [
    {
        provide: constants_1.LOGS_REPOSITORY,
        useValue: logs_entity_1.Logs,
    },
];
