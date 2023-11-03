export interface ISQLiteSequelizeConfigAttributes {
  dialect?: string;
  storage?: string;
  repositoryMode?: boolean;
}

export interface ISQLiteSequelizeConfig {
  development: ISQLiteSequelizeConfigAttributes;
  test: ISQLiteSequelizeConfigAttributes;
  production: ISQLiteSequelizeConfigAttributes;
}
