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

  async create(assetDto: assetManageDto): Promise<AssetManage> {
    return await this.assetRepository.save(assetDto);
  }

  async findAll(): Promise<AssetManage[]> {
    return await this.assetRepository.find();
  }

  async update(assetDto: assetManageDto): Promise<UpdateResult> {
    return await this.assetRepository.update(assetDto.assetId, assetDto);
  }

  async remove(assetId): Promise<void> {
    await this.assetRepository.delete(assetId);
  }
}
