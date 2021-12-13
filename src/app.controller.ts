import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 
 
 @UseGuards(LocalAuthGuard) 
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
