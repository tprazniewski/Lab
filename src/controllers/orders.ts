import { appDataSource } from "../DB/mysql";
import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { Order } from "../Entities/Order";
import { Patient } from "../Entities/Patient";
import { Sample } from "../Entities/Sample";
import { kind } from "../Entities/enums/kind";

interface Query {
  date: Date;
  patient_id: string;
  kind: kind;
}
export const getOrder: RequestHandler = (req, res) => {
  res.send({ message: " Order" });
};
export const getOrders: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());

  const { date, patient_id, kind } = req.query as any as Query;
  console.log("date", date);
  const orders = await Order.find({
    where: {
      sample: {
        kind: kind ? kind : undefined,
        patient: { id: patient_id ? parseInt(patient_id) : undefined },
      },
    },
  });
  console.log("ord", orders);
  return res.send({ message: " Orders list" });
};
export const addOrders: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());

  const { date } = req.body;
  const { sampleList } = req.body;

  const createOrder = await Order.create({ date }).save();

  for await (const samplee of sampleList) {
    const patientt = await Patient.findOneBy({
      id: parseInt(samplee.patientId),
    });
    console.log("patientos", patientt);
    if (patientt) {
      Sample.create({
        kind: samplee.kind,
        order: createOrder,
        patient: patientt!,
      }).save();
    }
  }

  return res.send({ message: " Order added" });
};
export const updateOrders: RequestHandler = (req, res) => {
  res.send({ message: "Order updated" });
};
export const deleteOrders: RequestHandler = (req, res) => {
  res.send({ message: " Order deleted" });
};
