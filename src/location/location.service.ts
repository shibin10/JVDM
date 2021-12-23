import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { LocationDto } from './dto/location-dto.dto';
import { Location } from './location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  async create(location: LocationDto) {
    return await this.locationRepository.save(location);
  }

  async getAllRole(query: any) {
    console.log(query);
    return this.locationRepository.find({ where: query });
  }

  async update(location: LocationDto) {
    return await this.locationRepository.update(location.id, location);
  }

  async remove(id) {
    await this.locationRepository.delete(id);
  }

  async getById(id: number) {
    return this.locationRepository.findOne({ where: { id: id } });
  }
}
