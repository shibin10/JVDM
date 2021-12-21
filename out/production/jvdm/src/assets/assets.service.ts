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

  async findAll() {
    return await this.assetRepository.find();
  }

  async update(assetDto: assetDto) {
    return await this.assetRepository.update(assetDto.assetId, assetDto);
  }

  async remove(assetId) {
    await this.assetRepository.delete(assetId);
  }
}
