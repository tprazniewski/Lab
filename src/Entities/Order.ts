import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  OneToMany,
} from "typeorm";

import { Sample } from "./Sample";

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date;

  @OneToMany(
    () => Sample, // We are going to return
    (sample) => sample.order
  )
  sample: Sample[];
}
