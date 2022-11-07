import express from "express";
import bodyParser from "body-parser";
import { appDataSource } from "./DB/mysql";
import ordersRouter from "./Routes/orders";
import patientsRouter from "./Routes/patient";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 999;
const app = express();

app.use(bodyParser.json());
app.use("/orders", ordersRouter);
app.use("/patients", patientsRouter);

appDataSource
  .initialize()
  .then(() => {
    app.listen(PORT);
    console.log(`App listenig on port ${PORT}`);
  })
  .catch((err) => console.log(err));
