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

  async create(prayer: PrayerDto): Promise<Prayer> {
    return await this.PrayerRepository.save(prayer);
  }

  async update(prayer: PrayerDto): Promise<UpdateResult> {
    return await this.PrayerRepository.update(prayer.pid, prayer);
  }

  async remove(id): Promise<void> {
    await this.PrayerRepository.delete(id);
  }
}
