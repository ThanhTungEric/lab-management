import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  staff_id: string;

  @Column({ type: 'varchar', nullable: true })
  associated_study_programs: string;

  @Column({ type: 'varchar', nullable: true })
  associated_faculty: string;

  @Column({ type: 'varchar', nullable: true })
  position: string;
}