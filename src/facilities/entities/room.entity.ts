import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Floor } from './floor.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  roomNumber: string;

  @Column({ default: 'classroom' }) // or 'lab', 'office', etc.
  type: string;

  @ManyToOne(() => Floor, (floor) => floor.rooms)
  floor: Floor;
}
