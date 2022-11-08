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
  samplekind: kind;
}

interface Id {
  id: string;
}

export const getOrder: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());
  try {
    const { id } = req.params as any as Id;
    const order = await Order.find({
      where: {
        id: parseInt(id),
      },
    });
    return res.send(order);
  } catch (err) {
    return res.status(404).send(err);
  }
};
export const getOrders: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());

  const { date, patient_id, samplekind } = req.query as any as Query;
  try {
    const orders = await Order.find({
      where: {
        date,
        sample: {
          kind: samplekind ? samplekind : undefined,
          patient: { id: patient_id ? parseInt(patient_id) : undefined },
        },
      },
    });
    return res.send(orders);
  } catch (error) {
    return res.status(404).send(error);
  }
};
export const addOrders: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());

  const { date } = req.body;
  const { sampleList } = req.body;
  try {
    const createOrder = await Order.create({ date }).save();

    try {
      for await (const samplee of sampleList) {
        const patientt = await Patient.findOneBy({
          id: parseInt(samplee.patientId),
        });
        if (patientt) {
          Sample.create({
            kind: samplee.kind,
            order: createOrder,
            patient: patientt!,
          }).save();
        }
      }

      return res.send({ message: " Order added" });
    } catch (error) {
      return res.status(404).send(error);
    }
  } catch (error) {
    return res.status(404).send(error);
  }
};
export const updateOrders: RequestHandler = (req, res) => {
  res.send({ message: "Order updated" });
};
export const deleteOrders: RequestHandler = (req, res) => {
  res.send({ message: " Order deleted" });
};
