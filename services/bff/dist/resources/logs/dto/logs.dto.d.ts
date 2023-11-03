import { ILogsDtoAttributes } from '../interfaces/logs.interface';
export declare class LogsDto implements ILogsDtoAttributes {
    id?: number;
    hash?: string;
    ip?: string;
    identify?: string;
    identifyId?: string;
    version?: string;
    definition?: string;
    description?: string;
    fileName?: string;
    eventAt?: Date;
}
declare const LogsDtoCreate_base: import("@nestjs/mapped-types").MappedType<Partial<LogsDto>>;
export declare class LogsDtoCreate extends LogsDtoCreate_base {
}
declare const LogsDtoUpdate_base: import("@nestjs/mapped-types").MappedType<Partial<LogsDto>>;
export declare class LogsDtoUpdate extends LogsDtoUpdate_base {
}
export declare class LogsDtoInternalError {
    message?: string;
    error?: string;
}
export declare class LogsDtoNoContentResponse {
    message?: string;
    status: string;
    count?: number;
    items?: LogsDto[];
    error?: string;
}
export declare class LogsDtoFoundResponse {
    message?: string;
    status: string;
    count?: number;
    items?: LogsDto[];
}
export declare class LogsDtoLoadResponse {
    message?: string;
    status: string;
}
export {};
