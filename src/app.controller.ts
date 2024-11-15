import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/name')
  getName(): string {
    return this.appService.name();
  }

  @Get('/hobby')
  getHobby(): string {
    return this.appService.hobby();
  }

  @Get('/dream')
  getDream(): string {
    return this.appService.dream();
  }
}
