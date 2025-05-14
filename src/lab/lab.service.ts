import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lab } from './entities/lab.entity';
import { Program } from 'src/faculty/entities/program.entity';
import { Room } from 'src/facilities/entities/room.entity';
import { User } from 'src/user/entities/lab_user.entity';
import { LabUserRole } from './entities/lab_user_role.entity';
import { LabRole } from './entities/lab_role.entity';

@Injectable()
export class LabService {
  constructor(
    @InjectRepository(Lab) private labRepo: Repository<Lab>,
    @InjectRepository(Program) private programRepo: Repository<Program>,
    @InjectRepository(Room) private roomRepo: Repository<Room>,
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(LabUserRole) private lurRepo: Repository<LabUserRole>,
    @InjectRepository(LabRole) private roleRepo: Repository<LabRole>,
  ) { }

  async createLab(data: {
    lab_id: string;
    lab_name: string;
    programId: string;
    roomId: string;
    labHeadId: number;
    engineerIds: number[];
  }) {
    const program = await this.programRepo.findOneBy({ id: data.programId });
    const room = await this.roomRepo.findOneBy({ id: data.roomId });
    const labHead = await this.userRepo.findOneBy({ id: data.labHeadId });
    const engineers = await this.userRepo.findByIds(data.engineerIds || []);

    if (!program || !room || !labHead) {
      throw new NotFoundException('Program, Room, or Lab Head not found');
    }

    const lab = this.labRepo.create({
      lab_id: data.lab_id,
      lab_name: data.lab_name,
      program,
      room,
    });

    const savedLab = await this.labRepo.save(lab);

    const labHeadRole = await this.roleRepo.findOneBy({ name: 'Lab Head' });
    const engineerRole = await this.roleRepo.findOneBy({ name: 'Engineer' });

    if (!labHeadRole || !engineerRole) {
      throw new NotFoundException('Lab roles not found. Please seed LabRole table.');
    }

    // Gán role cho lab head
    await this.lurRepo.save({
      lab: savedLab,
      user: labHead,
      role: labHeadRole,
    });

    // Gán role cho engineers
    for (const engineer of engineers) {
      await this.lurRepo.save({
        lab: savedLab,
        user: engineer,
        role: engineerRole,
      });
    }
    
    return savedLab;
  }

  findAll() {
    return this.labRepo.find({
      relations: ['program', 'room', 'userRoles', 'userRoles.user', 'userRoles.role'],
    });
  }

  findOne(id: string) {
    return this.labRepo.findOne({
      where: { id },
      relations: ['program', 'room', 'userRoles', 'userRoles.user', 'userRoles.role'],
    });
  }
}
