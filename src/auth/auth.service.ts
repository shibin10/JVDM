import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/users/dto/create-user.dto';
import { UserService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(uname: string, pass: string): Promise<User> {
    const user = await this.usersService.findByID(uname);

    if (user && user.psw === pass) {
      const { psw, uname, ...rest } = user;
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { uname: user.uname, sub: user.uid };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
