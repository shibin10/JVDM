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
import { RoleDto } from './dto/roles-dto.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  async create(@Body() rolesDto: RoleDto) {
    return this.rolesService.create(rolesDto);
  }

  @Get()
  async getAllRole(@Query('id') id: number) {
    const roleQuery: any = {};

    if (id) {
      roleQuery.id = id;
    }

    const data = this.rolesService.getAllRole(roleQuery);
    return data;
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.rolesService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() roleDto: RoleDto) {
    roleDto.id = Number(id);
    console.log('update #' + roleDto.id);
    return this.rolesService.update(roleDto);
  }

  @Delete(':id')
  delete(@Param('id') [id]) {
    return this.rolesService.remove(id);
  }
}
