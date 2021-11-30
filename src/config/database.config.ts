import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'jvdm',
  synchronize: true,
  autoLoadEntities: true,
  //entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
