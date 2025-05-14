import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Campus } from './campus.entity';

@Entity()
export class Facility {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Campus, (campus) => campus.facility)
  campuses: Campus[];
}
