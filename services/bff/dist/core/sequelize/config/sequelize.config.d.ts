import { ISQLiteSequelizeConfig } from '../interfaces/sequelize.config.interface';
export declare const sequelizeConfigSQLite: ISQLiteSequelizeConfig;
export declare const dbMap: {
    id: number;
    name: string;
    type: string;
    host: string;
    storage: string;
    domain: string;
    bucket: string;
    clientId: number;
    clientActive: boolean;
    clientSecret: string;
    clientScopes: string;
    clientGrantTypes: string;
    clientRedirectUris: string;
    clientPostLogoutRedirectUris: string;
}[];
