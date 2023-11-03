import { Module } from '@nestjs/common';
import { sequelizeProviders } from '../../../core/sequelize/sequelize.providers';
import { SequelizeConfigService } from '../../../core/sequelize/sequelize.config.service';
import { SequelizeMultiTenantModule } from 'sequelizemultitenantmodule';
import { SequelizeConfigModule } from '../../../core/sequelize/sequelize.module';
import { LogsService } from '../services/logs.service';
import { logsProviders } from '../providers/logs.providers';
import { LogsController } from '../controllers/logs.controller';
import { AppService } from 'src/app.service';

@Module({
  imports: [
    SequelizeMultiTenantModule.forRootAsync({
      imports: [SequelizeConfigModule],
      useExisting: SequelizeConfigService,
    }),
    LogsModule,
  ],
  providers: [
    AppService,
    LogsService, ...logsProviders,
    SequelizeConfigService, ...sequelizeProviders,
  ],
  controllers: [LogsController],
  exports: [
    AppService,
    LogsService,
    SequelizeConfigService,
  ],
})
export class LogsModule { }
