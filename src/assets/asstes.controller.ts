import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RoleDto } from '../roles/dto/roles-dto.dto';
import { Assets } from './assets.entity';
import { AssetsService } from './assets.service';
import { assetDto } from './dto/assets-dto.dto';

@Controller('asset')
export class AssetsController {
  constructor(private AssetsService: AssetsService) {}

  @Post()
  async create(@Body() assetDto: assetDto): Promise<any> {
    return this.AssetsService.create(assetDto);
  }

  @Get()
  index(): Promise<Assets[]> {
    return this.AssetsService.findAll();
  }

  @Put(':assetId')
  async update(
    @Param('assetId') assetId,
    @Body() assetDto: assetDto,
  ): Promise<any> {
    assetDto.assetId = Number(assetId);
    console.log('update #' + assetDto.assetId);
    return this.AssetsService.update(assetDto);
  }

  @Delete(':assetId')
  delete(@Param('assetId') [assetId]): Promise<void> {
    return this.AssetsService.remove(assetId);
  }
}
