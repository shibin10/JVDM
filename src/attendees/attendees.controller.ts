import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Attendee } from './atendee.entity';
import { AttendeesService } from './attendees.service';
import { AttendeeDto } from './dto/attendee-dto.dto';

@Controller('attendee')
export class AttendeesController {
  constructor(private attendeesService: AttendeesService) {}

  @Post()
  async create(@Body() attendeeDto: AttendeeDto): Promise<any> {
    return this.attendeesService.create(attendeeDto);
  }

  @Get()
  index(): Promise<Attendee[]> {
    return this.attendeesService.findAll();
  }

  @Put(':prayerId')
  async update(
    @Param('prayerId') prayerId,
    @Body() attendeeDto: AttendeeDto,
  ): Promise<any> {
    attendeeDto.prayerId = Number(prayerId);
    return this.attendeesService.update(attendeeDto);
  }

  @Delete(':prayerId')
  async delete(
    @Param('paryerId') prayerId,
    @Body() attendeeDto: AttendeeDto,
  ): Promise<void> {
    attendeeDto.prayerId = Number(prayerId);
    return this.attendeesService.remove(attendeeDto);
  }
}
