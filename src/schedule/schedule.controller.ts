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
import { ScheduleDto } from './dto/schedule-dto.dto';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Get()
  async getAllSchedule(@Query('userId') userId: number) {
    const userQuery: any = {};

    if (userId) {
      userQuery.userId = userId;
    }

    const data = this.scheduleService.getAllSchedule(userQuery);
    return data;
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.scheduleService.getById(id);
  }

  @Post()
  async create(@Body() scheduleDto: ScheduleDto) {
    return this.scheduleService.create(scheduleDto);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() scheduleDto: ScheduleDto) {
    scheduleDto.id = Number(id);
    console.log('update #' + scheduleDto.id);
    return this.scheduleService.update(scheduleDto);
  }

  @Delete(':id')
  delete(@Param('id') [id]) {
    return this.scheduleService.remove(id);
  }
}
