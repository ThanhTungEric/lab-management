// src/equipments/entities/equipment_specification.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Equipment } from './equipment.entity';
import { Specification } from './specification.entity';

@Entity('equipment_specifications')
export class EquipmentSpecification {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Equipment, (equipment) => equipment.equipment_specifications)
  equipment: Equipment;

  @ManyToOne(() => Specification)
  specification: Specification;

  @Column()
  value: string;
}
