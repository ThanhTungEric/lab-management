import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FunctionCategory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
