import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UpdateResult } from 'typeorm';
import { UserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getById(id: number) {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async create(user: UserDto) {
    return await this.usersRepository.save(user);
  }

  async update(user: UserDto) {
    return await this.usersRepository.update(user.id, user);
  }

  async remove(id) {
    await this.usersRepository.delete(id);
  }

  async getAllUsers(roleId: number) {
    return this.usersRepository.find({ where: { roleId: roleId } });
  }
}
