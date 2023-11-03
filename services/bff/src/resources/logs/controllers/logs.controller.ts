import { ApiOperation, ApiTags, ApiFoundResponse, ApiInternalServerErrorResponse, ApiBadRequestResponse, ApiOkResponse, ApiDefaultResponse } from "@nestjs/swagger";
import { Controller, Get, Response } from '@nestjs/common';
import { LogsService } from '../services/logs.service';
import { Logs } from '../entities/logs.entity';
import { LogsDtoInternalError, LogsDtoFoundResponse, LogsDtoNoContentResponse, LogsDtoLoadResponse } from "../dto/logs.dto";

@ApiTags("logs")
@Controller('logs')
export class LogsController {

  constructor(private readonly logsService: LogsService) { }
  @ApiOperation({ summary: "Retrieve logs from database" })
  @ApiOkResponse({ status: 200, description: "The request has succeeded.", type: LogsDtoFoundResponse })
  @ApiInternalServerErrorResponse({ status: 500, description: "Internal Server Error!", type: LogsDtoInternalError })
  @ApiDefaultResponse({ status: 200, description: "No Content Response", type: LogsDtoNoContentResponse })
  @Get()
  async findAll(@Response() res: any): Promise<Logs[]> {
    try {
      const items = await this.logsService.findAll();
      const count = items.length;
      if (count > 0) {
        return res.status(200).json({
          status: "OK",
          message: `The request has retrieve succeeded.`,
          count,
          items
        });
      } else {
        return res.status(200).json({
          status: "Error",
          message: `The request not found events in database`,
          count: 0,
          items: [],
          error: "No Content Response!"
        });
      }
    }
    catch (error) {
      return res.status(500).json({
        message: error.message,
        error: "Internal Server Error!"
      });
    }
  }

  @ApiOperation({ summary: "Start the loading process" })
  @ApiOkResponse({ status: 200, description: "The request for process started has succeeded.", type: LogsDtoLoadResponse })
  @ApiInternalServerErrorResponse({ status: 500, description: "Internal Server Error!", type: LogsDtoInternalError })
  @Get('/load')
  async loadLogFiles(@Response() res: any): Promise<Logs[]> {
    try {
      await this.logsService.loadLogFiles();
      return res.status(200).json({
        status: "OK",
        message: `The process started in the background, wait a few moments to perform queries!`,
      });
    }
    catch (error) {
      return res.status(500).json({
        statusCode: 500,
        status: "Error",
        message: error.message,
        error: "Internal Server Error"
      });
    }
  }

}
