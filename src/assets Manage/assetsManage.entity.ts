import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AssetManage {
  @PrimaryColumn()
  assetId: number;

  @Column()
  userId: number;

  @Column()
  quantity: number;
}
