import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfig } from './config/database.config';
import { PrayerModule } from './prayer/prayer.module';
import { UserModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AttendeesModule } from './attendees/attendees.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AssetsModule } from './assets/assets.module';

@Module({
  imports: [
    PrayerModule,
    UserModule,
    AssetsModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
    AttendeesModule,
    RolesModule,

    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
