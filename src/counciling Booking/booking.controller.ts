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
import { BookingDto } from './dto/booking-dto.dto';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Post()
  async create(@Body() bookingDto: BookingDto) {
    return this.bookingService.create(bookingDto);
  }

  @Get()
  async getAllBooking(
    @Query('id') id: number,
    @Query('status') status: string,
    @Query('priority') priority: number,
  ) {
    const Query: any = {};

    if (id) {
      Query.id = id;
    }

    if (status) {
      Query.status = status;
    }

    if (priority) {
      Query.priority = priority;
    }

    const data = this.bookingService.getAllBooking(Query);
    return data;
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.bookingService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() roleDto: BookingDto) {
    roleDto.id = Number(id);
    console.log('update #' + roleDto.id);
    return this.bookingService.update(roleDto);
  }

  @Delete(':id')
  delete(@Param('id') [id]) {
    return this.bookingService.remove(id);
  }
}
