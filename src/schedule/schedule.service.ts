import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduleDto } from './dto/schedule-dto.dto';
import { schedule } from './schedule.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(schedule)
    private scheduleRepository: Repository<schedule>,
  ) {}

  async create(scheduleDto: ScheduleDto) {
    return await this.scheduleRepository.save(scheduleDto);
  }

  async findAll() {
    return await this.scheduleRepository.find();
  }

  async update(scheduleDto: ScheduleDto) {
    return await this.scheduleRepository.update(
      scheduleDto.userId,
      scheduleDto,
    );
  }

  async remove(userId) {
    return await this.scheduleRepository.delete(userId);
  }

  async getAllSchedule(query: any) {
    return this.scheduleRepository.find({ where: query });
  }

  async getById(id: number) {
    return this.scheduleRepository.findOne({ where: { userId: id } });
  }
}
