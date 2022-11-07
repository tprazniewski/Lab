import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { kind } from "./enums/kind";

@Entity()
export class Sample extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    type: "enum",
    enum: kind,
  })
  kind: kind;
}
