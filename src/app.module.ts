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
import { AssetsManageModule } from './assets Manage/assets.module';
import { LocationModule } from './location/location.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UserService } from './users/users.service';
import { User } from './users/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { BookingModule } from './counciling Booking/booking.module';

@Module({
  imports: [
    PrayerModule,
    UserModule,
    AssetsModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
    TypeOrmModule.forFeature([User]),
    AttendeesModule,
    RolesModule,
    AssetsManageModule,
    ScheduleModule,
    LocationModule,
    BookingModule,
    AuthModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UserService, AuthService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
