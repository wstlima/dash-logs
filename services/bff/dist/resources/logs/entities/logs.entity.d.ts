import { Model } from "sequelize-typescript";
import { LogsDto } from "../dto/logs.dto";
import { ILogsDtoAttributes } from "../interfaces/logs.interface";
export declare class Logs extends Model<LogsDto, LogsDto> implements ILogsDtoAttributes {
    id: number;
    hash: string;
    ip: string;
    identify: string;
    identifyId: string;
    version: string;
    definition: string;
    description: string;
    fileName: string;
    eventAt: Date;
    createdAt: Date;
}
