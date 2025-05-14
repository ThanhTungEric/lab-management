import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PhysicalForm {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
