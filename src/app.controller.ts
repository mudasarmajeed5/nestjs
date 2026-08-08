import { Controller, Get, Headers, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
fetchReq(
  @Param('id') id: string,
  @Query() queryParams: Record<string, any>,
  @Headers('user-agent') userAgent: string | undefined,
) {
  return { id, queryParams, userAgent };
}
}
