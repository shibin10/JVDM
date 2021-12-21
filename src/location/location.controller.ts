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
  async getAllRole(@Query('locationId') locationId: number) {
    const Query: any = {};

    if (locationId) {
      Query.locationId = locationId;
    }

    const data = this.locationService.getAllRole(Query);
    return data;
  }

  @Get(':locationId')
  async getById(@Param('locationId') locationId: number) {
    return this.locationService.getById(locationId);
  }

  @Put(':locationId')
  async update(
    @Param('locationId') locationId,
    @Body() locationDto: LocationDto,
  ) {
    locationDto.locationId = Number(locationId);
    console.log('update #' + locationDto.locationId);
    return this.locationService.update(locationDto);
  }

  @Delete(':locationId')
  delete(@Param('locationId') [locationId]) {
    return this.locationService.remove(locationId);
  }
}
