import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Specification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;       // ví dụ: "Bandwidth", "Channels", "Sampling Rate"

  @Column()
  unit: string;       // ví dụ: "MHz", "channel", "GSa/s"
}
