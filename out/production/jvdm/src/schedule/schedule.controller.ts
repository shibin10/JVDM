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
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Post()
  async create(@Body() scheduleDto: ScheduleDto) {
    return this.scheduleService.create(scheduleDto);
  }

  @Get()
  async findAll() {
    return this.scheduleService.findAll();
  }

  @Put(':userId')
  async update(@Param('userId') userId, @Body() scheduleDto: ScheduleDto) {
    scheduleDto.userId = Number(userId);
    console.log('update #' + scheduleDto.userId);
    return this.scheduleService.update(scheduleDto);
  }

  @Delete(':userId')
  delete(@Param('userId') [userId]) {
    return this.scheduleService.remove(userId);
  }
}
