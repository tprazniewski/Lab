import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { kind } from "./enums/kind";
import { Order } from "./Order";

@Entity()
export class Sample extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    type: "enum",
    enum: kind,
  })
  kind: kind;

  @ManyToOne(() => Order, (order) => order.sample, { onDelete: "CASCADE" })
  @JoinColumn({
    name: "order_id",
  })
  order: Order;
}
