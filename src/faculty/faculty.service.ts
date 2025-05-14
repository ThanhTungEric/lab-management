import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './entities/faculty.entity';
import { Program } from './entities/program.entity';

@Injectable()
export class FacultyService {
  constructor(
    @InjectRepository(Faculty) private facultyRepo: Repository<Faculty>,
    @InjectRepository(Program) private programRepo: Repository<Program>,
  ) {}

  // Faculty
  createFaculty(name: string, code?: string) {
    const faculty = this.facultyRepo.create({ name, code });
    return this.facultyRepo.save(faculty);
  }

  getAllFaculties() {
    return this.facultyRepo.find({ relations: ['programs'] });
  }

  // Study Program
async createProgram(name: string, code: string, facultyId: string) {
  const faculty = await this.facultyRepo.findOneBy({ id: facultyId });
  if (!faculty) {
    throw new Error('Faculty not found');
  }

  const program = this.programRepo.create({
    name,
    code,
    faculty,
  });

  return this.programRepo.save(program);
}


  getProgramsByFaculty(facultyId: string) {
    return this.programRepo.find({
      where: { faculty: { id: facultyId } },
      relations: ['faculty'],
    });
  }
}
