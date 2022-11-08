import { Router } from "express";

import { addPatient } from "../controllers/patients";
import { createPatientValidator } from "../utils/patientValidator";
const router = Router();

router.post("/", createPatientValidator, addPatient);

export default router;
