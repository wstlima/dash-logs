import { LogsService } from '../services/logs.service';
import { Logs } from '../entities/logs.entity';
export declare class LogsController {
    private readonly logsService;
    constructor(logsService: LogsService);
    findAll(res: any): Promise<Logs[]>;
    loadLogFiles(res: any): Promise<Logs[]>;
}
