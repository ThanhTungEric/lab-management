import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Domain {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
