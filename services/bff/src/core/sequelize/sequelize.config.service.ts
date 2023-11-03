import { SequelizeOptionsFactory, SequelizeModuleOptions } from '@nestjs/sequelize';
import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

import { dbMap } from './config/sequelize.config';
import { Sequelize } from 'sequelize-typescript';

@Injectable({ scope: Scope.REQUEST })
export class SequelizeConfigService implements SequelizeOptionsFactory {
  public tenantStarted: boolean = false;
  public sequelize: Sequelize;

  constructor(@Inject(REQUEST) private readonly request: Request) { }

  async databaseCreate(models: any[], dbKey: any, async: boolean = false) {
    this.sequelize = new Sequelize(this.createSequelizeOptions(dbKey));
    this.sequelize.addModels(models);
    this.tenantStarted = true;
    if (async) {
      await this.sequelize.sync();
      return this.sequelize;
    } else {
      return this.sequelize;
    }
  }

  createSequelizeOptions(dbKey?: any): SequelizeModuleOptions {
    if (!dbKey) {
      dbKey = 'db_permissions';
    }
    const db_map: any = dbMap;
    const idxReferer = this.request['rawHeaders'].indexOf('referer');
    const referer = this.request['rawHeaders'][idxReferer + 1];
    // console.log('rawHeaders => ', this.request['rawHeaders']);

    if (referer) {
      let currentUrl = referer.replace('https://', '');
      currentUrl = currentUrl.replace('http://', '');
      currentUrl = currentUrl.replace('www.', '');
      currentUrl = currentUrl.split(/[/?#]/)[0];
      let dbTarget = undefined;
      db_map.forEach((db: any) => {
        const domains = db.domain.split(';');
        domains.find((db_domain: any) => {
          if (dbTarget === undefined && db_domain === currentUrl) {
            dbTarget = db.storage;
          }
        });
      });
    }

    const config: SequelizeModuleOptions = {
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
}
