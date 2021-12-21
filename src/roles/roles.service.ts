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

  async getAllRole(query: any) {
    console.log(query);
    return this.roleRepository.find({ where: query });
  }

  async update(role: RoleDto) {
    return await this.roleRepository.update(role.roleId, role);
  }

  async remove(roleId) {
    await this.roleRepository.delete(roleId);
  }

  async getById(id: number) {
    return this.roleRepository.findOne({ where: { roleId: id } });
  }
}
