import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Equipment } from './equipment.entity';

@Entity('equipment_maintenances')
export class EquipmentMaintenance {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Equipment, (equipment) => equipment.maintenances, { onDelete: 'CASCADE' })
    equipment: Equipment;

    @Column({ type: 'timestamp' })
    scheduled_date: Date;

    @Column({ type: 'varchar', default: 'Planned' }) // hoặc 'Completed', 'Missed'
    status: string;

    @Column({ type: 'text', nullable: true })
    note: string;
}
