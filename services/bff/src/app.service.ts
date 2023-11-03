import { Injectable, Inject } from '@nestjs/common';
import { SequelizeConfigService } from './core/sequelize/sequelize.config.service';
import { Logs } from './resources/logs/entities/logs.entity';

@Injectable()
export class AppService {
  public tenantStarted: boolean = false;
  public tables: any[] = ["Tenant", "Settings"];

  constructor(
    private readonly sequelizeConfigService: SequelizeConfigService,
  ) {
    this.sqliteSync('dash_log_db', true);
  }

  async sqliteSync(dbKey: string, sync: boolean = false) {
    return this.sequelizeConfigService.databaseCreate( [ Logs ], dbKey, sync );
  }
}
