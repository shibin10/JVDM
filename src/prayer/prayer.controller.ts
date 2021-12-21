import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { get } from 'http';
import { Request } from 'express';
import { PrayerDto } from './dto/prayer-dto.dto';
import { Prayer } from './prayer.entity';
import { PrayerService } from './prayer.service';

@Controller('prayer')
export class PrayerController {
  constructor(private prayerService: PrayerService) {}

  @Post()
  async create(@Body() prayerDto: PrayerDto) {
    return this.prayerService.create(prayerDto);
  }

  @Get()
  async getAllPrayer(@Query('prayerId') prayerId: number) {
    const userQuery: any = {};

    if (prayerId) {
      userQuery.prayerId = prayerId;
    }

    const data = this.prayerService.getAllPrayer(userQuery);
    return data;
  }

  @Get(':prayerId')
  async getById(@Param('prayerId') prayerId: number) {
    return this.prayerService.getById(prayerId);
  }

  @Put(':pid')
  async update(@Param('pid') pid, @Body() prayerDto: PrayerDto) {
    prayerDto.prayerId = Number(pid);
    console.log('update #' + prayerDto.prayerId);
    return this.prayerService.update(prayerDto);
  }

  @Delete(':id')
  async delete(@Param('id') [id]) {
    console.log('id');
    return this.prayerService.remove(id);
  }
}
