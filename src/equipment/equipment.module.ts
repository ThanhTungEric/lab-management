import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipment } from './entities/equipment.entity';
import { FunctionCategory } from './entities/function_category.entity';
import { Technology } from './entities/technology.entity';
import { Domain } from './entities/domain.entity';
import { PhysicalForm } from './entities/physical_form.entity';
import { PriceCategory } from './entities/price_category.entity';
import { Status } from './entities/status.entity';
import { Component } from './entities/component.entity';
import { EquipmentSpecification } from './entities/equipment_specification.entity';
import { EquipmentSchedule } from './entities/equipment_schedule.entity';
import { EquipmentUsageLog } from './entities/equipment_usage_log.entity';
import { Specification } from './entities/specification.entity';
import { EquipmentMaintenance } from './entities/equipment_maintenance.entity';
import { Lab } from 'src/lab/entities/lab.entity';
import { CommonModule } from 'src/common/common.module';
import { EquipmentLoanRequest } from './entities/equipment_loan_request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
  Equipment,
  FunctionCategory,
  Technology,
  Domain,
  PhysicalForm,
  PriceCategory,
  Status,
  Component,
  EquipmentSpecification,
  EquipmentSchedule,
  EquipmentUsageLog,
  Specification,
  EquipmentMaintenance,
  Lab,
  EquipmentLoanRequest,
]),
  CommonModule,
],
  exports: [TypeOrmModule],
})
export class EquipmentModule {}
