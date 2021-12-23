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

  async getAllPrayer(query: any) {
    console.log(query);
    return this.PrayerRepository.find({ where: query });
  }

  async getById(prayerId: number) {
    return this.PrayerRepository.findOne({ where: { id: prayerId } });
  }

  async create(prayer: PrayerDto) {
    return await this.PrayerRepository.save(prayer);
  }

  async update(prayer: PrayerDto) {
    return await this.PrayerRepository.update(prayer.id, prayer);
  }

  async remove(id) {
    return await this.PrayerRepository.delete(id);
  }
}
