import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHelloWorld() {
    return this.appService.getHello();
  }
  @Get('/uuid/:id')
  getId(@Param('id', ParseUUIDPipe) id: string) {
    return `ID Received: ${id}`;
  }
  // @Get('/uuid/:id')
  // getId(@Param("id", new ParseUUIDPipe({version: "4"})) id: string){
  // return `ID Received: ${id}`
  // }
}
