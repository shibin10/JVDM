import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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
  async findAll() {
    return this.rolesService.findAll();
  }

  @Put(':roleId')
  async update(@Param('roleId') roleId, @Body() roleDto: RoleDto) {
    roleDto.roleId = Number(roleId);
    console.log('update #' + roleDto.roleId);
    return this.rolesService.update(roleDto);
  }

  @Delete(':roleId')
  delete(@Param('roleId') [roleId]) {
    return this.rolesService.remove(roleId);
  }
}
