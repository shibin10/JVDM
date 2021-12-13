import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetManage } from './assetsManage.entity';
import { AssetsManageService } from './assetsManage.service';
import { AssetsManageController } from './asstesManage.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AssetManage])],
  providers: [AssetsManageService],
  controllers: [AssetsManageController],
})
export class AssetsManageModule {}
