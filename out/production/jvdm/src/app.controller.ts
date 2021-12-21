import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
  /*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }*/
}
