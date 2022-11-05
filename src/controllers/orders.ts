import { appDataSource } from "../DB/mysql";
import { RequestHandler } from "express";

export const getOrder: RequestHandler = (req, res) => {
  res.send({ message: " Order" });
};
export const getOrders: RequestHandler = (req, res) => {
  console.log("weszlo");
  res.send({ message: " Orders list" });
};
export const addOrders: RequestHandler = (req, res) => {
  res.send({ message: " Order added" });
};
export const updateOrders: RequestHandler = (req, res) => {
  res.send({ message: "Order updated" });
};
export const deleteOrders: RequestHandler = (req, res) => {
  res.send({ message: " Order deleted" });
};
