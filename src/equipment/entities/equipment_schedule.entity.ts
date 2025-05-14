import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Equipment } from './equipment.entity';

@Entity('equipment_schedules')
export class EquipmentSchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Equipment, (equipment) => equipment.schedules, { onDelete: 'CASCADE' })
  equipment: Equipment;

  @Column({ type: 'timestamp' })
  start_time: Date;

  @Column({ type: 'timestamp' })
  end_time: Date;

  @Column({ type: 'varchar' })
  status: string;
}