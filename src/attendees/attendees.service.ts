import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Attendee } from './atendee.entity';
import { AttendeeDto } from './dto/attendee-dto.dto';

@Injectable()
export class AttendeesService {
  constructor(
    @InjectRepository(Attendee)
    private attendeeRepository: Repository<Attendee>,
  ) {}

  async create(attendeeDto: AttendeeDto) {
    return await this.attendeeRepository.save(attendeeDto);
  }

  async getAllAttendee(query: any) {
    console.log(query);
    return this.attendeeRepository.find({ where: query });
  }
  async update(attendeeDto: AttendeeDto) {
    return await this.attendeeRepository.update(
      attendeeDto.prayerId,
      attendeeDto,
    );
  }

  async remove(id) {
    await this.attendeeRepository.delete(id);
  }

  async getById(id: number) {
    return this.attendeeRepository.findOne({ where: { userId: id } });
  }
}
