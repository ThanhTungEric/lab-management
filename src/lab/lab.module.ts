import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lab } from './entities/lab.entity';
import { LabService } from './lab.service';
import { LabController } from './lab.controller';
import { Program } from 'src/faculty/entities/program.entity';
import { Room } from 'src/facilities/entities/room.entity';
import { User } from 'src/user/entities/lab_user.entity';
import { Equipment } from 'src/equipment/entities/equipment.entity';
import { LabUserRole } from './entities/lab_user_role.entity';
import { LabRole } from './entities/lab_role.entity';
import { CommonModule } from 'src/common/common.module';
import { LabUsageRequest } from './entities/lab_usage_request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lab, Program, Room, User, Equipment, LabUserRole, LabRole, LabUsageRequest]),
    CommonModule,
  ],
  providers: [LabService],
  controllers: [LabController],
  exports: [LabService],
})
export class LabModule { }
