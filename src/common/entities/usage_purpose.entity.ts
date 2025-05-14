import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usage_purposes')
export class UsagePurpose {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string; // Ví dụ: 'teaching', 'research', ...
}
