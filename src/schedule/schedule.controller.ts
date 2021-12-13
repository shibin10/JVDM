import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ScheduleDto } from './dto/schedule-dto.dto';
import { schedule } from './schedule.entity';

import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Post()
  async create(@Body() scheduleDto: ScheduleDto): Promise<any> {
    return this.scheduleService.create(scheduleDto);
  }

  @Get()
  index(): Promise<schedule[]> {
    return this.scheduleService.findAll();
  }

  @Put(':userId')
  async update(
    @Param('userId') userId,
    @Body() scheduleDto: ScheduleDto,
  ): Promise<any> {
    scheduleDto.userId = Number(userId);
    console.log('update #' + scheduleDto.userId);
    return this.scheduleService.update(scheduleDto);
  }

  @Delete(':userId')
  delete(@Param('userId') [userId]): Promise<void> {
    return this.scheduleService.remove(userId);
  }
}
