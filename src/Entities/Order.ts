import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
} from "typeorm";

@Entity()
export class Order extends BaseEntity {
  @PrimaryColumn("increment")
  id: Number;

  @Column()
  date: Date;
}
