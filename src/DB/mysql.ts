import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Order } from "../Entities/Order";
import { Patient } from "../Entities/Patient";
import { Sample } from "../Entities/Sample";
dotenv.config();
export const appDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Order, Patient, Sample],
  synchronize: true,
});
