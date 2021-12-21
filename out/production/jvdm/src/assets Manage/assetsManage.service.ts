import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { AssetManage } from './assetsManage.entity';
import { assetManageDto } from './dto/assetsManage-dto.dto';

@Injectable()
export class AssetsManageService {
  constructor(
    @InjectRepository(AssetManage)
    private assetRepository: Repository<AssetManage>,
  ) {}

  async create(assetDto: assetManageDto) {
    return await this.assetRepository.save(assetDto);
  }

  async findAll() {
    return await this.assetRepository.find();
  }

  async update(assetDto: assetManageDto) {
    return await this.assetRepository.update(assetDto.assetId, assetDto);
  }

  async remove(assetId) {
    await this.assetRepository.delete(assetId);
  }
}
