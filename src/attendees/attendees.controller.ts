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

  @Get(':userId')
  async getById(@Param('userId') id: number) {
    return this.attendeesService.getById(id);
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
