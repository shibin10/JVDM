import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Location } from '../location/location.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  date: Date;

  @Column()
  prayerId: number;

  @Column()
  locationId: number;

  // @ManyToMany(() => Location, (location) => location.schedule)
  // @JoinTable()
  // location: Location[];
}
