import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campus } from './entities/campus.entity';
import { Building } from './entities/building.entity';
import { Floor } from './entities/floor.entity';
import { Room } from './entities/room.entity';

@Injectable()
export class FacilitiesService {
  constructor(
    @InjectRepository(Campus) private campusRepo: Repository<Campus>,
    @InjectRepository(Building) private buildingRepo: Repository<Building>,
    @InjectRepository(Floor) private floorRepo: Repository<Floor>,
    @InjectRepository(Room) private roomRepo: Repository<Room>,
  ) {}

  // Campus
  async createCampus(name: string, address: string) {
    const campus = this.campusRepo.create({ name, address });
    return this.campusRepo.save(campus);
  }

  async getAllCampuses() {
    return this.campusRepo.find();
  }

  async getCampusById(id: string) {
    return this.campusRepo.findOne({ where: { id } });
  }

  // Building
  async createBuilding(name: string, campusId: string) {
    const campus = await this.campusRepo.findOne({ where: { id: campusId } });
    if (!campus) throw new NotFoundException('Campus not found');
    const building = this.buildingRepo.create({ name, campus });
    return this.buildingRepo.save(building);
  }

  async getBuildingsByCampus(campusId: string) {
    return this.buildingRepo.find({
      where: { campus: { id: campusId } },
      relations: ['campus'],
    });
  }

  // Floor
  async createFloor(level: number, buildingId: string) {
    const building = await this.buildingRepo.findOne({ where: { id: buildingId } });
    if (!building) throw new NotFoundException('Building not found');
    const floor = this.floorRepo.create({ level, building });
    return this.floorRepo.save(floor);
  }

  async getFloorsByBuilding(buildingId: string) {
    return this.floorRepo.find({
      where: { building: { id: buildingId } },
      relations: ['building'],
    });
  }

  // Room
  async createRoom(name: string, roomNumber: string, type: string, floorId: string) {
    const floor = await this.floorRepo.findOne({ where: { id: floorId } });
    if (!floor) throw new NotFoundException('Floor not found');
    const room = this.roomRepo.create({ name, roomNumber, type, floor });
    return this.roomRepo.save(room);
  }

  async getRoomsByFloor(floorId: string) {
    return this.roomRepo.find({
      where: { floor: { id: floorId } },
      relations: ['floor'],
    });
  }
}
