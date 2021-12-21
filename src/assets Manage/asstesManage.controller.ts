import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
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
  async getAllAssets(@Query('assetId') assetId: number) {
    const Query: any = {};

    if (assetId) {
      Query.assetId = assetId;
    }

    const data = this.assetsManageService.getAllAssets(Query);
    return data;
  }

  @Get(':assetId')
  async getById(@Param('assetId') id: number) {
    return this.assetsManageService.getById(id);
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
