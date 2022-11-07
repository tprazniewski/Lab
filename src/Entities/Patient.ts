import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Sample } from "./Sample";

@Entity()
export class Patient extends BaseEntity {
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

  @OneToMany(
    () => Sample, // We are going to return
    (sample) => sample.order
  )
  sample: Sample[];
}
