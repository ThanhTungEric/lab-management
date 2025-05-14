import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Component {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
