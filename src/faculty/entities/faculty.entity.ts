import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Program } from './program.entity';

@Entity()
export class Faculty {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  code: string;

  @OneToMany(() => Program, (program) => program.faculty)
  programs: Program[];
}
