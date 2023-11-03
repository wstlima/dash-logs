import { SequelizeOptionsFactory, SequelizeModuleOptions } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
export declare class SequelizeConfigService implements SequelizeOptionsFactory {
    private readonly request;
    tenantStarted: boolean;
    sequelize: Sequelize;
    constructor(request: Request);
    databaseCreate(models: any[], dbKey: any, async?: boolean): Promise<Sequelize>;
    createSequelizeOptions(dbKey?: any): SequelizeModuleOptions;
}
