import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ScheduleDto } from './dto/schedule-dto.dto';
import { schedule } from './schedule.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(schedule)
    private scheduleRepository: Repository<schedule>,
  ) {}

  async create(scheduleDto: ScheduleDto): Promise<schedule> {
    return await this.scheduleRepository.save(scheduleDto);
  }

  async findAll(): Promise<schedule[]> {
    return await this.scheduleRepository.find();
  }

  async update(scheduleDto: ScheduleDto): Promise<UpdateResult> {
    return await this.scheduleRepository.update(
      scheduleDto.userId,
      scheduleDto,
    );
  }

  async remove(roleId): Promise<void> {
    await this.scheduleRepository.delete(roleId);
  }
}
