import { Router } from "express";

import { addPatient } from "../controllers/patients";

const router = Router();

router.post("/", addPatient);

export default router;
