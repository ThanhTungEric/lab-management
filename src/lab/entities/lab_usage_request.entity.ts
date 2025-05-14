// src/lab/entities/lab_usage_request.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Lab } from './lab.entity';
import { Equipment } from 'src/equipment/entities/equipment.entity';
import { User } from 'src/user/entities/lab_user.entity';
import { UsagePurpose } from 'src/common/entities/usage_purpose.entity';
import { RequestStatus } from 'src/common/entities/request_status.entity';

@Entity('lab_usage_requests')
export class LabUsageRequest {
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

  @Column('simple-array') // e.g. 'students,visitors'
  participants: string[];

  @Column({ default: false })
  is_recurring: boolean;

  @Column({ default: false })
  uses_lab_supplies: boolean;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => RequestStatus)
  status: RequestStatus;
}
