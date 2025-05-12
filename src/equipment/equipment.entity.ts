import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('equipments')
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  equipment_id: string;

  @Column({ type: 'text', nullable: true })
  name: string;
}