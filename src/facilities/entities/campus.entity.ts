import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Facility } from './facility.entity';
import { Building } from './building.entity';

@Entity()
export class Campus {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne(() => Facility, (facility) => facility.campuses)
  facility: Facility;

  @OneToMany(() => Building, (building) => building.campus)
  buildings: Building[];
}
