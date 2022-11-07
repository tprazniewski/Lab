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
import { Patient } from "./Patient";

@Entity()
export class Sample extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    type: "enum",
    enum: kind,
  })
  kind: kind;

  @ManyToOne(
    () => Order, // We are going to return
    (order) => order.sample,
    {
      onDelete: "CASCADE",
    }
  )
  @JoinColumn({
    name: "order_id",
  })
  order: Order;

  @ManyToOne(
    () => Patient, // We are going to return
    (patient) => patient.sample,
    {
      onDelete: "CASCADE",
    }
  )
  @JoinColumn({
    name: "patient_id",
  })
  patient: Patient;
}
