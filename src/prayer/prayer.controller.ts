import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { PrayerDto } from './dto/prayer-dto.dto';
import { Prayer } from './prayer.entity';
import { PrayerService } from './prayer.service';

@Controller('prayer')
export class PrayerController {
  constructor(private prayerService: PrayerService) {}

  @Post()
  async create(@Body() prayerDto: PrayerDto): Promise<any> {
    return this.prayerService.create(prayerDto);
  }

  @Get()
  index(): Promise<Prayer[]> {
    return this.prayerService.findAll();
  }

  @Put(':pid')
  async update(@Param('pid') pid, @Body() prayerDto: PrayerDto): Promise<any> {
    prayerDto.prayerId = Number(pid);
    console.log('update #' + prayerDto.prayerId);
    return this.prayerService.update(prayerDto);
  }
  @Delete(':id')
  delete(@Param('id') [id]): Promise<void> {
    return this.prayerService.remove(id);
  }
}
