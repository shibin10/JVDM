import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AttendeesService } from './attendees.service';
import { AttendeeDto } from './dto/attendee-dto.dto';

@Controller('attendee')
export class AttendeesController {
  constructor(private attendeesService: AttendeesService) {}

  @Post()
  async create(@Body() attendeeDto: AttendeeDto) {
    return this.attendeesService.create(attendeeDto);
  }

  @Get()
  async findAll() {
    return this.attendeesService.findAll();
  }

  @Put(':prayerId')
  async update(@Param('prayerId') prayerId, @Body() attendeeDto: AttendeeDto) {
    attendeeDto.prayerId = Number(prayerId);
    return this.attendeesService.update(attendeeDto);
  }

  @Delete(':prayerId')
  async delete(@Param('paryerId') prayerId, @Body() attendeeDto: AttendeeDto) {
    attendeeDto.prayerId = Number(prayerId);
    return this.attendeesService.remove(attendeeDto);
  }
}
