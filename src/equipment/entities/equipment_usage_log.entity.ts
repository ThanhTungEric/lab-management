// src/equipments/entities/equipment_usage_log.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Equipment } from './equipment.entity';

@Entity('equipment_usage_logs')
export class EquipmentUsageLog {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Equipment, (equipment) => equipment.usage_logs, { onDelete: 'CASCADE' })
  equipment: Equipment;

  @Column()
  user: string; // hoặc ManyToOne đến User nếu cần

  @Column({ type: 'timestamp' })
  timestamp: Date;

  @Column({ type: 'text', nullable: true })
  note: string;
}
