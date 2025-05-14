import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Technology {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
