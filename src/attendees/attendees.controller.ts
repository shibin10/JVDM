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
  async getAllAttendee(
    @Query('userId') userId: number,
    @Query('prayerId') prayerId: number,
  ) {
    const Query: any = {};

    if (userId) {
      Query.userId = userId;
    }

    if (prayerId) {
      Query.prayerId = prayerId;
    }

    const data = this.attendeesService.getAllAttendee(Query);
    return data;
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.attendeesService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() attendeeDto: AttendeeDto) {
    attendeeDto.id = Number(id);
    return this.attendeesService.update(attendeeDto);
  }

  @Delete(':id')
  async delete(@Param('id') id, @Body() attendeeDto: AttendeeDto) {
    attendeeDto.id = Number(id);
    return this.attendeesService.remove(attendeeDto);
  }
}
