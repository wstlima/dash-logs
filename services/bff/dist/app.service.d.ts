import { SequelizeConfigService } from './core/sequelize/sequelize.config.service';
export declare class AppService {
    private readonly sequelizeConfigService;
    tenantStarted: boolean;
    tables: any[];
    constructor(sequelizeConfigService: SequelizeConfigService);
    sqliteSync(dbKey: string, sync?: boolean): Promise<import("sequelize-typescript").Sequelize>;
}
