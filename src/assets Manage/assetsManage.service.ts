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

  async getAllAssets(query: any) {
    console.log(query);
    return this.assetRepository.find({ where: query });
  }

  async update(assetDto: assetManageDto) {
    return await this.assetRepository.update(assetDto.assetId, assetDto);
  }

  async remove(assetId) {
    await this.assetRepository.delete(assetId);
  }
  async getById(id: number) {
    return this.assetRepository.findOne({ where: { assetId: id } });
  }
}
