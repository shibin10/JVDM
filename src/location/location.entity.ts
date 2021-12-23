import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Schedule } from '../schedule/schedule.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column()
  pincode: number;

  @Column()
  district: string;

  @Column()
  state: string;

  @Column()
  country: string;

  // @ManyToMany(() => Schedule, (schedule) => schedule.location)
  // schedule: Schedule[];
}
