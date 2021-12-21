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
  async findAll() {
    return await this.PrayerRepository.find();
  }

  async getById(prayerId: number) {
    return this.PrayerRepository.findOne({ where: { prayerId: prayerId } });
  }

  async create(prayer: PrayerDto) {
    return await this.PrayerRepository.save(prayer);
  }

  async update(prayer: PrayerDto) {
    return await this.PrayerRepository.update(prayer.prayerId, prayer);
  }

  async remove(id) {
    await this.PrayerRepository.delete(id);
  }

  // async getTaskWithFilters(time: string) {
  // return await this.PrayerRepository.find({ where: { time: time } });
  // }
  /*
  async getTaskWithFilters(prayer: PrayerDto) {
    const time = prayer;
    let tasks = this.findAll();

    if (time) {
      tasks = await tasks.filter();
    }
    return tasks;
  }*/
}
