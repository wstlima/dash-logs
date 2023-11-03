import { Module } from '@nestjs/common';
import { SequelizeConfigService } from './sequelize.config.service';
import { SequelizeMultiTenantModule } from 'sequelizemultitenantmodule';
import { sequelizeProviders } from './sequelize.providers';

@Module({
  imports: [
    SequelizeMultiTenantModule.forRootAsync({
      imports: [SequelizeConfigModule],
      useExisting: SequelizeConfigService,
      inject: [SequelizeConfigService],
    }),
  ],
  providers: [
    SequelizeConfigService,
    sequelizeProviders[0],
  ],
  exports: [SequelizeMultiTenantModule, SequelizeConfigService],
})
export class SequelizeConfigModule { }