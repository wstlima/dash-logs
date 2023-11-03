import { PartialType } from "@nestjs/mapped-types";
import { ILogsDtoAttributes } from '../interfaces/logs.interface';
import { ApiProperty } from '@nestjs/swagger';

export class LogsDto implements ILogsDtoAttributes {
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

export class LogsDtoCreate extends PartialType(LogsDto) { }

export class LogsDtoUpdate extends PartialType(LogsDto) { }

export class LogsDtoInternalError {
  @ApiProperty({ example: 'Not null', description: 'Erro' })
  message?: string;

  @ApiProperty({ example: 'Internal Server Error!', description: 'Mensagem' })
  error?: string;
}

export class LogsDtoNoContentResponse {
  @ApiProperty({ example: 'The request not found events in database', description: 'Detalhes do erro' })
  message?: string;

  @ApiProperty({ example: 'Error', description: 'Status da requisição' })
  status: string;

  @ApiProperty({ example: '0', description: 'Eventos retornados' })
  count?: number;

  @ApiProperty({ example: [], description: 'Lista de eventos' })
  items?: LogsDto[];

  @ApiProperty({ example: 'No Content Response!', description: 'Tipo do erro' })
  error?: string;
}

export class LogsDtoFoundResponse {
  @ApiProperty({ example: 'The request has retrieve succeeded.', description: 'Mensagem' })
  message?: string;

  @ApiProperty({ example: 'OK', description: 'Status da requisição' })
  status: string;

  @ApiProperty({ example: '5247', description: 'Eventos retornados' })
  count?: number;

  @ApiProperty({
    example: [{
      "id": 1,
      "hash": "147.8.118.215662791006-305-Mar-20223:03:04.000",
      "ip": "147.8.118.215",
      "identify": "Zaam-Dox",
      "identifyId": "152556033-6",
      "version": "0.8.7",
      "definition": "Multi-tiered static extranet",
      "description": "felis eu sapien cursus vestibulum proin eu mi nulla ac enim",
      "fileName": "AccessLogs (1).log",
      "eventAt": "2022-09-07 13:25:48.000 +00:00",
      "createdAt": "2022-09-07 13:25:48.000 +00:00"
    }],
    description: 'Lista de eventos'
  })
  items?: LogsDto[];
}

export class LogsDtoLoadResponse {
  @ApiProperty({ example: 'The process started in the background, wait a few moments to perform queries!', description: 'Mensagem' })
  message?: string;

  @ApiProperty({ example: 'OK', description: 'Status da requisição' })
  status: string;



}
