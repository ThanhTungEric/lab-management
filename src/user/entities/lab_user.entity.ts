import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Program } from 'src/faculty/entities/program.entity';
import { Position } from './position.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  staff_id: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  middle_name: string;

  @Column()
  first_name: string;

  @ManyToOne(() => Program, { nullable: true })
  program: Program;

  @ManyToOne(() => Position, { nullable: true })
  position: Position;
}
