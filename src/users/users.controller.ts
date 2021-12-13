import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UserDto } from './dto/create-user.dto';
import { UserService } from './users.service';
import { User } from './user.entity';
import { RoleDto } from '../roles/dto/roles-dto.dto';
import { RolesService } from '../roles/roles.service';

@Controller('users')
export class UserController {
  constructor(
    private UserService: UserService,
  ) // private rolesService: RolesService,
  {}

  @Post()
  async create(@Body() user: UserDto): Promise<any> {
    return this.UserService.create(user);
  }

  @Get()
  index(): Promise<User[]> {
    return this.UserService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id, @Body() user: UserDto): Promise<any> {
    user.userId = Number(id);
    console.log('Update #' + user.userId);
    return this.UserService.update(user);
  }

  @Delete(':id')
  delete(@Param('id') [id]): Promise<void> {
    return this.UserService.remove(id);
  }
}
