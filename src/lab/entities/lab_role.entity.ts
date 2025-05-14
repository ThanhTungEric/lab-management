import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class LabRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
