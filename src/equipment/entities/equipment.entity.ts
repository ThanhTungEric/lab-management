import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Component } from './component.entity';
import { FunctionCategory } from './function_category.entity';
import { Technology } from './technology.entity';
import { Domain } from './domain.entity';
import { PhysicalForm } from './physical_form.entity';
import { PriceCategory } from './price_category.entity';
import { Status } from './status.entity';
import { EquipmentSpecification } from './equipment_specification.entity';
import { EquipmentSchedule } from './equipment_schedule.entity';
import { EquipmentUsageLog } from './equipment_usage_log.entity';
import { EquipmentMaintenance } from './equipment_maintenance.entity';
import { Lab } from 'src/lab/entities/lab.entity';


@Entity('equipments')
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  equipment_id: string;

  @Column({ type: 'text', nullable: true })
  name: string;

  @ManyToOne(() => Lab, (lab) => lab.equiment, { onDelete: 'SET NULL' })
  lab: Lab;

  @ManyToMany(() => Component)
  @JoinTable()
  components: Component[];

  @ManyToOne(() => FunctionCategory)
  function_category: FunctionCategory;

  @ManyToOne(() => Technology)
  technology: Technology;

  @ManyToOne(() => Domain)
  domain: Domain;

  @ManyToOne(() => PhysicalForm)
  physical_form: PhysicalForm;

  //manufacturer 
  @Column({ type: 'text', nullable: true })
  manufacturer: string;

  //model_number
  @Column({ type: 'text', nullable: true })
  model_number: string;

  @OneToMany(() => EquipmentSpecification, (es) => es.equipment, { cascade: true })
  equipment_specifications: EquipmentSpecification[];

  //serial_number
  @Column({ type: 'text', nullable: true })
  serial_number: string;

  //purchase_date
  @Column({ type: 'date', nullable: true })
  purchase_date: Date;

  //warranty_expiry_date
  @Column({ type: 'date', nullable: true })
  warranty_expiry_date: Date;

  @ManyToOne(() => PriceCategory)
  price_category: PriceCategory;

  @ManyToOne(() => Status)
  status: Status;

  @OneToMany(() => EquipmentSchedule, (schedule) => schedule.equipment, { cascade: true })
  schedules: EquipmentSchedule[];

  @OneToMany(() => EquipmentUsageLog, (log) => log.equipment, { cascade: true })
  usage_logs: EquipmentUsageLog[];

  @OneToMany(() => EquipmentMaintenance, (m) => m.equipment, { cascade: true })
  maintenances: EquipmentMaintenance[];

  //calibration_required
  @Column({ type: 'boolean', default: false })
  calibration_required: boolean;

  //photo_url
  @Column({ type: 'text', nullable: true })
  photo_url: string;

  //manual_link 
  @Column({ type: 'text', nullable: true })
  manual_link: string;
}
