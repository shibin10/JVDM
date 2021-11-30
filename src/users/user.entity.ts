import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;
  /*
  @Column()
  place: string;

  @Column()
  age: number;

  @Column()
  year: number;

  @Column()
  uname: string;

  @Column()
  psw: string;
  
  */
}
