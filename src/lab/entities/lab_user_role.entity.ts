import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/lab_user.entity';
import { Lab } from './lab.entity';
import { LabRole } from './lab_role.entity';

@Entity()
export class LabUserRole {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { eager: true })
    user: User;

    @ManyToOne(() => Lab, { eager: true })
    lab: Lab;

    @ManyToOne(() => LabRole, { eager: true })
    role: LabRole;
}
