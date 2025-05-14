import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Campus } from './campus.entity';
import { Floor } from './floor.entity';

@Entity()
export class Building {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Campus, (campus) => campus.buildings)
  campus: Campus;

  @OneToMany(() => Floor, (floor) => floor.building)
  floors: Floor[];
}
