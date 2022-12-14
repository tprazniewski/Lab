import { body, check, ValidationChain, param } from "express-validator";
import { kind } from "../Entities/enums/kind";

export const createValidator: ValidationChain[] = [
  body("date")
    .not()
    .isEmpty()
    .withMessage("The date title mandatory")
    .isISO8601()
    .toDate()
    .withMessage("Invalid date received"),
  check("sampleList").exists(),
  body("sampleList.*.patientId")
    .exists()
    .withMessage("field patientId doesn't exist")
    .trim()
    .isNumeric()
    .withMessage("Only Decimals allowed"),
  body("sampleList.*.kind")
    .exists()
    .withMessage("field kind doesn't exist")
    .trim()
    .isIn([kind.bloodTest, kind.covidTest])
    .withMessage("kind can only be bloodTest or bloodTest "),
];

export const getOrderValdiator: ValidationChain[] = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("The Id title mandatory")
    .isNumeric()
    .withMessage("Only Decimals allowed"),
];
