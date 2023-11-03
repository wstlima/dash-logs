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
exports.SequelizeConfigService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const sequelize_config_1 = require("./config/sequelize.config");
const sequelize_typescript_1 = require("sequelize-typescript");
let SequelizeConfigService = class SequelizeConfigService {
    constructor(request) {
        this.request = request;
        this.tenantStarted = false;
    }
    async databaseCreate(models, dbKey, async = false) {
        this.sequelize = new sequelize_typescript_1.Sequelize(this.createSequelizeOptions(dbKey));
        this.sequelize.addModels(models);
        this.tenantStarted = true;
        if (async) {
            await this.sequelize.sync();
            return this.sequelize;
        }
        else {
            return this.sequelize;
        }
    }
    createSequelizeOptions(dbKey) {
        if (!dbKey) {
            dbKey = 'db_permissions';
        }
        const db_map = sequelize_config_1.dbMap;
        const idxReferer = this.request['rawHeaders'].indexOf('referer');
        const referer = this.request['rawHeaders'][idxReferer + 1];
        if (referer) {
            let currentUrl = referer.replace('https://', '');
            currentUrl = currentUrl.replace('http://', '');
            currentUrl = currentUrl.replace('www.', '');
            currentUrl = currentUrl.split(/[/?#]/)[0];
            let dbTarget = undefined;
            db_map.forEach((db) => {
                const domains = db.domain.split(';');
                domains.find((db_domain) => {
                    if (dbTarget === undefined && db_domain === currentUrl) {
                        dbTarget = db.storage;
                    }
                });
            });
        }
        const config = {
            dialect: 'sqlite',
            storage: `./data/${dbKey}.sqlite`,
            pool: {
                max: 5,
                min: 0,
                idle: 1000,
            },
            name: dbKey,
        };
        return config;
    }
};
SequelizeConfigService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Request])
], SequelizeConfigService);
exports.SequelizeConfigService = SequelizeConfigService;
