import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Building } from './building.entity';
import { Room } from './room.entity';
@Entity()
export class Floor {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  level: number;

  @ManyToOne(() => Building, (building) => building.floors)
  building: Building;

  @OneToMany(() => Room, (room) => room.floor)
  rooms: Room[];
}
