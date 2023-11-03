import { Injectable, Inject } from '@nestjs/common';
import { LOGS_REPOSITORY } from '../../../core/constants';
import { Logs } from '../entities/logs.entity';
import { AppService } from '../../../app.service';
import { loadLogFiles } from 'src/utils/log-files-reader';

@Injectable()
export class LogsService {

  constructor(
    @Inject(LOGS_REPOSITORY) private itemRepository: typeof Logs,
    private readonly appService: AppService,
  ) {
    this.appService.sqliteSync('dash_log_db', true);
  }

  async loadLogFiles(): Promise<any> {
    await this.appService.sqliteSync('dash_log_db', true);
    return await loadLogFiles(this.itemRepository);
  }

  async findAll(): Promise<Logs[]> {
    try {
      await this.appService.sqliteSync('dash_log_db', true);
      return await this.itemRepository.findAll();
    } catch (error) {
      throw error;
    }
  }

}
