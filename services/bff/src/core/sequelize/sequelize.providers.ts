import { SEQUELIZE } from '../constants';
import { SequelizeConfigService } from './sequelize.config.service';

export const sequelizeProviders = [{
  provide: SEQUELIZE,
  useFactory: async (sequelizeConfigService: SequelizeConfigService) => { },
  inject: [SequelizeConfigService],
  exports: [SequelizeConfigService],
}];
