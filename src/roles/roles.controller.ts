import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { identity } from 'rxjs';
import { RoleDto } from './dto/roles-dto.dto';
import { Roles } from './roles.entity';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  async create(@Body() rolesDto: RoleDto): Promise<any> {
    return this.rolesService.create(rolesDto);
  }

  @Get()
  index(): Promise<Roles[]> {
    return this.rolesService.findAll();
  }

  @Put(':roleId')
  async update(
    @Param('roleId') roleId,
    @Body() roleDto: RoleDto,
  ): Promise<any> {
    roleDto.roleId = Number(roleId);
    console.log('update #' + roleDto.roleId);
    return this.rolesService.update(roleDto);
  }

  @Delete(':roleId')
  delete(@Param('roleId') [roleId]): Promise<void> {
    return this.rolesService.remove(roleId);
  }
}
