import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Assets {
  @PrimaryGeneratedColumn()
  assetId: number;

  @Column()
  name: string;

  @Column()
  quantity: number;
}
