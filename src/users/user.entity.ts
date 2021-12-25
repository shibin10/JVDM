import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  status: string;

  @Column()
  place: string;

  @Column()
  email: string;

  @Column()
  phone: number;

  @Column()
  age: number;

  @Column()
  year: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  roleId: number;

  // @ManyToOne(() => Roles, (role) => role.id)
  // role: Roles;
}
