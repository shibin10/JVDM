import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { RoleDto } from './dto/roles-dto.dto';
import { Roles } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private roleRepository: Repository<Roles>,
  ) {}

  async create(role: RoleDto) {
    return await this.roleRepository.save(role);
  }

  async findAll() {
    return await this.roleRepository.find();
  }

  async update(role: RoleDto) {
    return await this.roleRepository.update(role.roleId, role);
  }

  async remove(roleId) {
    await this.roleRepository.delete(roleId);
  }
}
