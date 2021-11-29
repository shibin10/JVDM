import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { UserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async create(user: UserDto): Promise<User> {
    const newUser = new User();
    newUser.name = UserDto.nam;
    newUser.place = UserDto.place;
    newUser.uname = UserDto.uname;
    return await this.usersRepository.save(user);
  }

  /*
  async update(user: User): Promise<UpdateResult> {
    return await this.usersRepository.update(user.id, user);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
  */
}
