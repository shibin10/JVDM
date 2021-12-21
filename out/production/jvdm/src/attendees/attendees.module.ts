import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendee } from './atendee.entity';
import { AttendeesController } from './attendees.controller';
import { AttendeesService } from './attendees.service';

@Module({
  imports: [TypeOrmModule.forFeature([Attendee])],
  controllers: [AttendeesController],
  providers: [AttendeesService],
})
export class AttendeesModule {}
