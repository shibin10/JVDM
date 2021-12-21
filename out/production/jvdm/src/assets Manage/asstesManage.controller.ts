import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { AssetManage } from './assetsManage.entity';
import { AssetsManageService } from './assetsManage.service';
import { assetManageDto } from './dto/assetsManage-dto.dto';

@Controller('assetManage')
export class AssetsManageController {
  constructor(private assetsManageService: AssetsManageService) {}

  @Post()
  async create(@Body() assetDto: assetManageDto) {
    return this.assetsManageService.create(assetDto);
  }

  @Get()
  async findAll() {
    return this.assetsManageService.findAll();
  }

  @Put(':assetId')
  async update(@Param('assetId') assetId, @Body() assetDto: assetManageDto) {
    assetDto.assetId = Number(assetId);
    console.log('update #' + assetDto.assetId);
    return this.assetsManageService.update(assetDto);
  }

  @Delete(':assetId')
  delete(@Param('assetId') [assetId]) {
    return this.assetsManageService.remove(assetId);
  }
}
