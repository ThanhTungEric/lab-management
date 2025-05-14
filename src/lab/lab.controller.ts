import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { LabService } from './lab.service';

@Controller('labs')
export class LabController {
  constructor(private readonly service: LabService) {}

  @Post()
  createLab(@Body() body: {
    lab_id: string;
    lab_name: string;
    programId: string;
    roomId: string;
    labHeadId: number;
    engineerIds: number[];
  }) {
    return this.service.createLab(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
