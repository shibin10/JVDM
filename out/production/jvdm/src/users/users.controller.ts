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

  @Post()
  async create(@Body() user: UserDto) {
    return this.UserService.create(user);
  }

  @Get()
  async findAll() {
    return this.UserService.findAll();
  }

  @Get(':users')
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
  delete(@Param('id') [id]) {
    return this.UserService.remove(id);
  }

  @Get(':role')
  async getAllUsers(@Query('role') roleId: number) {
    console.log(roleId);
    return this.UserService.getAllUsers(roleId);
  }
}
