import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Roles } from '../roles/roles.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  name: string;

  @Column()
  roleId: number;

  @Column()
  address: string;
  /*
  @Column()
  place: string;

  @column({nullable:true})
  email:string;
  @Column()
  age: number;

  @Column()
  year: number;
 
  @Column()
  username: string;

  @Column()
  password: string;
 

  @OneToOne(() => Roles)
  @JoinColumn()
  role: Roles;  */
}
