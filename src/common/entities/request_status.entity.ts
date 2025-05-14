import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('request_statuses')
export class RequestStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string; // Ví dụ: 'pending', 'approved', 'rejected'
}
