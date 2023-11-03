import { LOGS_REPOSITORY } from '../../../core/constants';
import { Logs } from '../entities/logs.entity';

export const logsProviders = [
  {
    provide: LOGS_REPOSITORY,
    useValue: Logs,
  },
];
