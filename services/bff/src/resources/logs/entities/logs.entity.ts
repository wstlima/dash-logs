import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey, HasMany, BelongsTo, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger';
import { LogsDto } from "../dto/logs.dto";
import { ILogsDtoAttributes } from "../interfaces/logs.interface";

@Table({ tableName: "logs", timestamps: true })
export class Logs extends Model<LogsDto, LogsDto> implements ILogsDtoAttributes {

    @Column({ primaryKey: true, type: DataType.INTEGER, autoIncrement: true, allowNull: false })
    @ApiProperty({ example: '1', description: 'ID na base de dados' })    
    id!: number;

    @Column({ type: DataType.STRING(255), allowNull: false })
    @ApiProperty({ example: '147.8.118.215662791006-305-Mar-20223:03:04.000', description: 'Chave Composta' })    
    hash: string;

    @Column({ type: DataType.STRING(255), allowNull: false })
    @ApiProperty({ example: '147.8.118.215', description: 'Host IP' })    
    ip: string;

    @Column({ type: DataType.STRING(255), allowNull: false })
    @ApiProperty({ example: 'Zaam-Dox', description: 'Ofensor' }) 
    identify: string;

    @Column({ type: DataType.STRING(255), allowNull: false })
    @ApiProperty({ example: '152556033-6', description: 'Ofensor ID' }) 
    identifyId: string;

    @Column({ type: DataType.STRING(255), allowNull: false })
    @ApiProperty({ example: '0.8.7', description: 'Ofensor Versão' }) 
    version: string;

    @Column({ type: DataType.STRING(255), allowNull: false })
    @ApiProperty({ example: 'Multi-tiered static extranet', description: 'Ofensor Atuação' }) 
    definition: string;

    @Column({ type: DataType.STRING(255), allowNull: false })
    @ApiProperty({ example: 'felis eu sapien cursus vestibulum proin eu mi nulla ac enim', description: 'Ofensor Descrição' }) 
    description: string;

    @Column({ type: DataType.STRING(255), allowNull: false })
    @ApiProperty({ example: 'AccessLogs (1).log', description: 'Arquivo de origem' }) 
    fileName: string;

    @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
    @ApiProperty({ example: '2022-09-07 13:25:48.000 +00:00', description: 'Data do evento' }) 
    eventAt: Date;

    @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
    @ApiProperty({ example: '2022-09-07 13:25:48.000 +00:00', description: 'Data de carregamento' }) 
    createdAt: Date;

}