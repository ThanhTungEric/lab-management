import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { Room } from 'src/facilities/entities/room.entity';
import { Program } from 'src/faculty/entities/program.entity';
import { Equipment } from 'src/equipment/entities/equipment.entity';
import { LabUserRole } from './lab_user_role.entity';

@Entity()
export class Lab {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    lab_id: string;

    @OneToMany(() => Equipment, (enquiry) => enquiry.lab)
    equiment: Equipment[];

    @Column()
    lab_name: string;

    @ManyToOne(() => Program, { nullable: true })
    program: Program;

    @ManyToOne(() => Room)
    room: Room;

    @OneToMany(() => LabUserRole, (lur) => lur.lab)
    userRoles: LabUserRole[];
}
