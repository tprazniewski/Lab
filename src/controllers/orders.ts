import { appDataSource } from "../DB/mysql";
import { RequestHandler } from "express";
import { validationResult } from "express-validator";

export const getOrder: RequestHandler = (req, res) => {
  res.send({ message: " Order" });
};
export const getOrders: RequestHandler = (req, res) => {
  console.log("weszlo");
  res.send({ message: " Orders list" });
};
export const addOrders: RequestHandler = (req, res) => {
  console.log("weszlo");
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());
  console.log(req.body.date);
  console.log(req.body.sampleList);
  return res.send({ message: " Order added" });
};
export const updateOrders: RequestHandler = (req, res) => {
  res.send({ message: "Order updated" });
};
export const deleteOrders: RequestHandler = (req, res) => {
  res.send({ message: " Order deleted" });
};
