import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @Column()
  //address: string;

  @Column()
  place: string;

  @Column()
  uname: string;

  @Column()
  age: string;

  @Column()
  year: string;
}
