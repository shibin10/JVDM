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
import { LocationDto } from './dto/location-dto.dto';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Post()
  async create(@Body() locationDto: LocationDto) {
    return this.locationService.create(locationDto);
  }

  @Get()
  async getAllRole(@Query('id') id: number) {
    const Query: any = {};

    if (id) {
      Query.id = id;
    }

    const data = this.locationService.getAllRole(Query);
    return data;
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.locationService.getById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id,
    @Body() locationDto: LocationDto,
  ) {
    locationDto.id = Number(id);
    console.log('update #' + locationDto.id);
    return this.locationService.update(locationDto);
  }

  @Delete(':id')
  delete(@Param('id') [id]) {
    return this.locationService.remove(id);
  }
}
