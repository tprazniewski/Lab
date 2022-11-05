import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
