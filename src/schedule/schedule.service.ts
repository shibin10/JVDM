import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduleDto } from './dto/schedule-dto.dto';
import { Schedule } from './schedule.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}

  async create(scheduleDto: ScheduleDto) {
    return await this.scheduleRepository.save(scheduleDto);
  }

  async findAll() {
    return await this.scheduleRepository.find();
  }

  async update(scheduleDto: ScheduleDto) {
    return await this.scheduleRepository.update(scheduleDto.id, scheduleDto);
  }

  async remove(id) {
    return await this.scheduleRepository.delete(id);
  }

  async getAllSchedule(query: any) {
    return this.scheduleRepository.find({ where: query });
  }

  async getById(id: number) {
    return this.scheduleRepository.findOne({ where: { id: id } });
  }
}
