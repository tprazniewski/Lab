import { Router } from "express";

import {
  getOrder,
  getOrders,
  addOrders,
  updateOrders,
  deleteOrders,
} from "../controllers/orders";
import { createValidator, getOrderValdiator } from "../utils/orderValidator";
import { queryValidator } from "../utils/queryValidator";
const router = Router();

router.get("/", queryValidator, getOrders);

router.get("/:id", getOrderValdiator, getOrder);

router.post("/", createValidator, addOrders);

router.put("/", updateOrders);

router.delete("/", deleteOrders);

export default router;
