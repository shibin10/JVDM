import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UpdateResult } from 'typeorm';
import { UserDto } from './dto/create-user.dto';

//export type User = User[] ;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByID(uname: string): Promise<any> {
    return await this.usersRepository.find();
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async create(user: UserDto): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async update(user: UserDto): Promise<UpdateResult> {
    return await this.usersRepository.update(user.id, user);
  }

  async remove(id): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
function Where(Where: any, arg1: { User: typeof User; '': boolean }) {
  throw new Error('Function not implemented.');
}
