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
    @Query('status') status: string,
    @Query('roleId') roleId: string,
    @Query('phone') phone: string,
  ) {
    const userQuery: any = {};

    if (status) {
      userQuery.status = status;
    }

    if (roleId) {
      userQuery.roleId = roleId;
    }

    if (phone) {
      userQuery.phone = phone;
    }

    const data = this.UserService.getAllUsers(userQuery);
    return data;
  }

  @Post()
  async create(@Body() user: UserDto) {
    return this.UserService.create(user);
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
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
