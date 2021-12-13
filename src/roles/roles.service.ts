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

  async create(role: RoleDto): Promise<Roles> {
    return await this.roleRepository.save(role);
  }

  async findAll(): Promise<Roles[]> {
    return await this.roleRepository.find();
  }

  async update(role: RoleDto): Promise<UpdateResult> {
    return await this.roleRepository.update(role.roleId, role);
  }

  async remove(roleId): Promise<void> {
    await this.roleRepository.delete(roleId);
  }
}
