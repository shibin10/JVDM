import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
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
  async findAll() {
    return this.prayerService.findAll();
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
  delete(@Param('id') [id]) {
    return this.prayerService.remove(id);
  }
  /*
  @Get(':details')
  getTasks(@Query('details') prayer: PrayerDto)\{
    if (Object.keys(prayer).length) {
      return this.prayerService.getTaskWithFilters(prayer);
    }
  }


@Get('search')
async backend(@Req() req:Request){
  const builder=await this.prayerService.queryBuilder('Prayer');

  if(req.query.s){
    builder.where
  }*/
}
