import { Router } from "express";
import { samplesGetAllValidator } from "../utils/sampleValidator";
import { getSamples } from "../controllers/sample";
const router = Router();

router.get("/", samplesGetAllValidator, getSamples);

export default router;
