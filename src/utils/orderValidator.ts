import { body, ValidationChain } from "express-validator";
import { kind } from "../Entities/enums/kind";

export const createValidator: ValidationChain[] = [
  body("date")
    .not()
    .isEmpty()
    .withMessage("The date title mandatory")
    .isISO8601()
    .toDate()
    .withMessage("Invalid day received"),
];
