import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/name')
  @HttpCode(200)
  getName(): string {
    return this.appService.name();
  }

  @Get('/hobby')
  @HttpCode(200)
  getHobby(): string {
    return this.appService.hobby();
  }

  @Get('/dream')
  @HttpCode(200)
  getDream(): string {
    return this.appService.dream();
  }
}
