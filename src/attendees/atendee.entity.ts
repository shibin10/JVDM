import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attendee {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  userId: number;

  @Column()
  prayerId: number;
}
