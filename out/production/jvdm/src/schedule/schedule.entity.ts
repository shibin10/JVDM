import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class schedule {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  prayerId: number;

  @Column()
  date: Date;

  @Column()
  location: String;
}
