import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Prayer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  time: string;

  @Column()
  zoom: number;

  @Column()
  psw: number;
}
