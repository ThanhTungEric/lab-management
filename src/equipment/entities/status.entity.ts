import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Status {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;
}
