import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/lab_user.entity';
import { Position } from './entities/position.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Position])],
  exports: [TypeOrmModule],
})
export class UserModule {}
