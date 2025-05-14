import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

import { EquipmentModule } from './equipment/equipment.module';
import { UserModule } from './user/lab_user.module';
import { FacilitiesModule } from './facilities/facilities.module';
import { FacultyModule } from './faculty/faculty.module';
import { LabModule } from './lab/lab.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    EquipmentModule,
    UserModule,
    FacilitiesModule,
    FacultyModule,
    LabModule,
  ],
})
export class AppModule {}
