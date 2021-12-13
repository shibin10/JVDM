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

@Controller('assetmanage')
export class AssetsManageController {
  constructor(private assetsmanageService: AssetsManageService) {}

  @Post()
  async create(@Body() assetDto: assetManageDto): Promise<any> {
    return this.assetsmanageService.create(assetDto);
  }

  @Get()
  index(): Promise<AssetManage[]> {
    return this.assetsmanageService.findAll();
  }

  @Put(':assetId')
  async update(
    @Param('assetId') assetId,
    @Body() assetDto: assetManageDto,
  ): Promise<any> {
    assetDto.assetId = Number(assetId);
    console.log('update #' + assetDto.assetId);
    return this.assetsmanageService.update(assetDto);
  }

  @Delete(':assetId')
  delete(@Param('assetId') [assetId]): Promise<void> {
    return this.assetsmanageService.remove(assetId);
  }
}
