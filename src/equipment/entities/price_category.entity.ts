import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PriceCategory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
