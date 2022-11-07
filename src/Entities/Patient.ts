import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Sample } from "./Sample";
@Entity()
export class Patient {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  date: Date;

  @OneToMany(() => Sample, (sample) => sample.patient)
  sample: Sample[];
}
