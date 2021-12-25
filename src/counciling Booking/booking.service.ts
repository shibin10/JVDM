import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { BookingDto } from './dto/booking-dto.dto';
import { Booking } from './booking.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
  ) {}

  async create(booking: BookingDto) {
    return await this.bookingRepository.save(booking);
  }

  async getAllBooking(query: any) {
    console.log(query);
    return this.bookingRepository.find({ where: query });
  }

  async update(booking: BookingDto) {
    return await this.bookingRepository.update(booking.id, booking);
  }

  async remove(id) {
    await this.bookingRepository.delete(id);
  }

  async getById(id: number) {
    return this.bookingRepository.findOne({ where: { id: id } });
  }
}
