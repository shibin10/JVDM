import { Module } from '@nestjs/common';
import { PrayerController } from './prayer.controller';
import { PrayerService } from './prayer.service';

@Module({
  controllers: [PrayerController],
  providers: [PrayerService],
})
export class PrayerModule {}
