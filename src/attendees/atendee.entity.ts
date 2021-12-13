import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Attendee {
  @PrimaryColumn()
  userId: number;

  @Column()
  prayerId: number;
}
