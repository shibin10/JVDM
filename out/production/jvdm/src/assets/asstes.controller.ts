import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { AssetsService } from './assets.service';
import { assetDto } from './dto/assets-dto.dto';

@Controller('asset')
export class AssetsController {
  constructor(private AssetsService: AssetsService) {}

  @Post()
  async create(@Body() assetDto: assetDto) {
    return this.AssetsService.create(assetDto);
  }

  @Get()
  index() {
    return this.AssetsService.findAll();
  }

  @Put(':assetId')
  async update(@Param('assetId') assetId, @Body() assetDto: assetDto) {
    assetDto.assetId = Number(assetId);
    console.log('update #' + assetDto.assetId);
    return this.AssetsService.update(assetDto);
  }

  @Delete(':assetId')
  delete(@Param('assetId') [assetId]) {
    return this.AssetsService.remove(assetId);
  }
}
