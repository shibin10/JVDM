import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { Repository, UpdateResult } from 'typeorm';
import { Attendee } from './atendee.entity';
import { AttendeeDto } from './dto/attendee-dto.dto';

@Injectable()
export class AttendeesService {
  constructor(
    @InjectRepository(Attendee)
    private attendeeRepository: Repository<Attendee>,
  ) {}

  async create(attendeeDto: AttendeeDto): Promise<Attendee> {
    return await this.attendeeRepository.save(attendeeDto);
  }

  async findAll(): Promise<Attendee[]> {
    return await this.attendeeRepository.find();
  }

  async update(attendeeDto: AttendeeDto): Promise<UpdateResult> {
    return await this.attendeeRepository.update(
      attendeeDto.prayerId,
      attendeeDto,
    );
  }

  async remove(prayerId): Promise<void> {
    await this.attendeeRepository.delete(prayerId);
  }
}
