import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { PrayerDto } from './dto/prayer-dto.dto';
import { Prayer } from './prayer.entity';

@Injectable()
export class PrayerService {
  constructor(
    @InjectRepository(Prayer)
    private PrayerRepository: Repository<Prayer>,
  ) {}
  async findAll(): Promise<Prayer[]> {
    return await this.PrayerRepository.find();
  }

  async getById(prayerId: number): Promise<Prayer> {
    return this.PrayerRepository.findOne({ where: { prayerId: prayerId } });
  }

  async create(prayer: PrayerDto): Promise<Prayer> {
    return await this.PrayerRepository.save(prayer);
  }

  async update(prayer: PrayerDto): Promise<UpdateResult> {
    return await this.PrayerRepository.update(prayer.prayerId, prayer);
  }

  async remove(id): Promise<void> {
    await this.PrayerRepository.delete(id);
  }

  // async getTaskWithFilters(time: string): Promise<Prayer[]> {
  // return await this.PrayerRepository.find({ where: { time: time } });
  // }
  /*
  async getTaskWithFilters(prayer: PrayerDto): Promise<Prayer[]> {
    const time = prayer;
    let tasks = this.findAll();

    if (time) {
      tasks = await tasks.filter();
    }
    return tasks;
  }*/
}
