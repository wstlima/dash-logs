"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbMap = exports.sequelizeConfigSQLite = void 0;
const CONSTANTS = __importStar(require("../../constants"));
exports.sequelizeConfigSQLite = {
    development: {
        dialect: CONSTANTS.DB_DIALECT,
        storage: CONSTANTS.DB_STORAGE_DEVELOPMENT,
    },
    test: {
        dialect: CONSTANTS.DB_DIALECT,
        storage: CONSTANTS.DB_STORAGE_TEST,
    },
    production: {
        dialect: CONSTANTS.DB_DIALECT,
        storage: CONSTANTS.DB_STORAGE_PRODUCTION,
    },
};
exports.dbMap = [
    {
        "id": 1,
        "name": "db_dev",
        "type": "sqlite",
        "host": "localhost",
        "storage": "./data/db_dev.sqlite",
        "domain": "localhost:3000;admin.localhost.top",
        "bucket": "localhost",
        "clientId": 1,
        "clientActive": true,
        "clientSecret": "secret",
        "clientScopes": "openid profile email",
        "clientGrantTypes": "authorization_code client_credentials implicit password refresh_token",
        "clientRedirectUris": "",
        "clientPostLogoutRedirectUris": ""
    }
];
