import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FacilitiesService } from './facilities.service';

@Controller('facilities')
export class FacilitiesController {
  constructor(private readonly service: FacilitiesService) {}

  // Campus
  @Post('campus')
  createCampus(@Body() body: { name: string; address: string }) {
    return this.service.createCampus(body.name, body.address);
  }

  @Get('campus')
  getAllCampuses() {
    return this.service.getAllCampuses();
  }

  @Get('campus/:id')
  getCampus(@Param('id') id: string) {
    return this.service.getCampusById(id);
  }

  // Building
  @Post('building')
  createBuilding(@Body() body: { name: string; campusId: string }) {
    return this.service.createBuilding(body.name, body.campusId);
  }

  @Get('campus/:id/buildings')
  getBuildingsByCampus(@Param('id') campusId: string) {
    return this.service.getBuildingsByCampus(campusId);
  }

  // Floor
  @Post('floor')
  createFloor(@Body() body: { level: number; buildingId: string }) {
    return this.service.createFloor(body.level, body.buildingId);
  }

  @Get('building/:id/floors')
  getFloorsByBuilding(@Param('id') buildingId: string) {
    return this.service.getFloorsByBuilding(buildingId);
  }

  // Room
  @Post('room')
  createRoom(@Body() body: { name: string; roomNumber: string; type: string; floorId: string }) {
    return this.service.createRoom(body.name, body.roomNumber, body.type, body.floorId);
  }

  @Get('floor/:id/rooms')
  getRoomsByFloor(@Param('id') floorId: string) {
    return this.service.getRoomsByFloor(floorId);
  }
}
