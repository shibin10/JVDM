import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prayer } from './prayer.entity';
import { PrayerController } from './prayer.controller';
import { PrayerService } from './prayer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prayer])],
  controllers: [PrayerController],
  providers: [PrayerService],
})
export class PrayerModule {}
