import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FacultyService } from './faculty.service';

@Controller('faculties')
export class FacultyController {
  constructor(private readonly service: FacultyService) {}

  // Faculty
  @Post()
  createFaculty(@Body() body: { name: string; code?: string }) {
    return this.service.createFaculty(body.name, body.code);
  }

  @Get()
  getAllFaculties() {
    return this.service.getAllFaculties();
  }

  // Study Program
  @Post(':id/programs')
  createProgram(
    @Param('id') facultyId: string,
    @Body() body: { name: string; code: string },
  ) {
    return this.service.createProgram(body.name, body.code, facultyId);
  }

  @Get(':id/programs')
  getPrograms(@Param('id') facultyId: string) {
    return this.service.getProgramsByFaculty(facultyId);
  }
}
