import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Lab } from 'src/lab/entities/lab.entity';
import { Equipment } from './equipment.entity';
import { User } from 'src/user/entities/lab_user.entity';
import { UsagePurpose } from 'src/common/entities/usage_purpose.entity';
import { RequestStatus } from 'src/common/entities/request_status.entity';

@Entity('equipment_loan_requests')
export class EquipmentLoanRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Lab)
  lab: Lab;

  @ManyToMany(() => Equipment)
  @JoinTable()
  equipments: Equipment[];

  @ManyToOne(() => UsagePurpose)
  purpose: UsagePurpose;

  @Column({ type: 'datetime' })
  start_time: Date;

  @Column({ type: 'datetime' })
  end_time: Date;

  @Column('simple-array')
  usage_audience: string[];

  @Column({ default: false })
  is_recurring: boolean;

  @Column({ default: false })
  uses_lab_supplies: boolean;

  @Column({ default: true })
  usage_location: boolean;

  @Column({ type: 'text', nullable: true })
  usage_location_details: string;

  @Column({ default: false })
  has_license: boolean;

  @Column({ type: 'text', nullable: true })
  license_details: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => RequestStatus)
  status: RequestStatus;
}
