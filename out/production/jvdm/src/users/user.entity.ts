import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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
  phone:number;
  
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
