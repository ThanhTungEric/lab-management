import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsagePurpose } from './entities/usage_purpose.entity';
import { RequestStatus } from './entities/request_status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsagePurpose, RequestStatus])],
  exports: [TypeOrmModule],
})
export class CommonModule {}
