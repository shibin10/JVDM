import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prayer } from './dto/prayer.dto';
import { PrayerService } from './prayer.service';

@Controller('prayer')
export class PrayerController {
  constructor(private prayerService: PrayerService) {}

  @Post()
  async create(@Body() details: Prayer) {
    this.prayerService.Create(details);
  }

  @Get()
  getallUsers() {
    return this.prayerService.getUsers();
  }
}
