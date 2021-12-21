import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assets } from './assets.entity';
import { AssetsService } from './assets.service';
import { AssetsController } from './asstes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Assets])],
  providers: [AssetsService],
  controllers: [AssetsController],
})
export class AssetsModule {}
