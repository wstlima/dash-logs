import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeConfigService } from './core/sequelize/sequelize.config.service';
import { SequelizeMultiTenantModule } from 'sequelizemultitenantmodule';
import { SequelizeConfigModule } from './core/sequelize/sequelize.module';
import { LogsService } from './resources/logs/services/logs.service';
import { logsProviders } from './resources/logs/providers/logs.providers';
import { LogsModule } from './resources/logs/modules/logs.module';

@Module({
  imports: [
    SequelizeMultiTenantModule.forRootAsync({
      imports: [SequelizeConfigModule],
      useExisting: SequelizeConfigService,
    }),
    LogsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    LogsService, ...logsProviders,
    SequelizeConfigService,
  ],
  exports: [
    AppService,
    LogsService,
    SequelizeConfigService,
  ],
})

export class AppModule { }
