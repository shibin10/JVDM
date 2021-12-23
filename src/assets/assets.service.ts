import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Assets } from './assets.entity';
import { assetDto } from './dto/assets-dto.dto';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Assets)
    private assetRepository: Repository<Assets>,
  ) {}

  async create(assetDto: assetDto) {
    return await this.assetRepository.save(assetDto);
  }

  async getAllAssets(query: any) {
    console.log(query);
    return this.assetRepository.find({ where: query });
  }

  async update(assetDto: assetDto) {
    return await this.assetRepository.update(assetDto.id, assetDto);
  }

  async remove(id) {
    await this.assetRepository.delete(id);
  }

  async getById(id: number) {
    return this.assetRepository.findOne({ where: { id: id } });
  }
}
