import { Logs } from '../entities/logs.entity';
import { AppService } from '../../../app.service';
export declare class LogsService {
    private itemRepository;
    private readonly appService;
    constructor(itemRepository: typeof Logs, appService: AppService);
    loadLogFiles(): Promise<any>;
    findAll(): Promise<Logs[]>;
}
