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
  @PrimaryColumn("increment")
  id: Number;

  @Column()
  date: Date;
  @OneToMany(() => Sample, (sample) => sample.order)
  sample: Sample[];
}
