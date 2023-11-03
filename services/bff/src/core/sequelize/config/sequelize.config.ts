import * as CONSTANTS from '../../constants';
import { ISQLiteSequelizeConfig } from '../interfaces/sequelize.config.interface';

export const sequelizeConfigSQLite: ISQLiteSequelizeConfig = {
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

export const dbMap = [
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
]


