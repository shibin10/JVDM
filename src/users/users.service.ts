import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.usersRepository.find();
  }

  async create(user: UserDto) {
    return await this.usersRepository.save(user);
  }

  async getById(id: number) {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  async update(user: UserDto) {
    return await this.usersRepository.update(user.id, user);
  }

  async deleteOne(id:number) {
    return await this.usersRepository.delete(id);
  }

  async getAllUsers(query: any) {
    console.log(query);
    return this.usersRepository.find({ where: query });
  }
}
