import { Router } from "express";

import {
  getOrder,
  getOrders,
  addOrders,
  updateOrders,
  deleteOrders,
} from "../controllers/orders";
import { createValidator } from "../utils/orderValidator";

const router = Router();

router.get("/", getOrders);

router.get("/:id", getOrder);

router.post("/", createValidator, addOrders);

router.put("/", updateOrders);

router.delete("/", deleteOrders);

export default router;
