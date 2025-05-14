import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campus } from './entities/campus.entity';
import { Building } from './entities/building.entity';
import { Floor } from './entities/floor.entity';
import { Room } from './entities/room.entity';
import { FacilitiesService } from './facilities.service';
import { FacilitiesController } from './facilities.controller';
import { Facility } from './entities/facility.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Campus, Building, Floor, Room, Facility])],
  providers: [FacilitiesService],
  controllers: [FacilitiesController],
  exports: [FacilitiesService],
})
export class FacilitiesModule {}