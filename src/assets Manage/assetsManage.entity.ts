import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AssetManage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  assetId: number;

  @Column()
  userId: number;

  @Column()
  quantity: number;

  @Column()
  locationId: number;
}
