import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  counselorId: number;

  @Column()
  userId: number;

  @Column()
  leaderId: number;

  @Column()
  place: string;

  @Column()
  district: string;

  @Column()
  status: string;

  @Column()
  note: string;

  @Column()
  priority: string;

  @Column()
  call_date: Date;

  @Column()
  assign_date: Date;
}
