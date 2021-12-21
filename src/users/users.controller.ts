import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  ParseBoolPipe,
  Query,
} from '@nestjs/common';
import { UserDto } from './dto/create-user.dto';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get()
  async getAllUsers(
    @Query('roleId') roleId: number,
    @Query('status') status: string,
  ) {
    const userQuery: any = {};

    if (roleId) {
      userQuery.roleId = roleId;
    }
    if (status) {
      userQuery.status = status;
    }
    const data = this.UserService.getAllUsers(userQuery);
    return data;
  }

  @Post()
  async create(@Body() user: UserDto) {
    return this.UserService.create(user);
  }

  @Get(':id')
  async getById(@Param('users') id: number) {
    return this.UserService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() user: UserDto) {
    user.id = Number(id);
    console.log('Update #' + user.id);
    return this.UserService.update(user);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    const data = this.UserService.deleteOne(Number(id));
    return data;
  }
}
