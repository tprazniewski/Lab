import { body, check, ValidationChain, query } from "express-validator";

export const createPatientValidator: ValidationChain[] = [
  body("dateOfBirth")
    .not()
    .isEmpty()
    .withMessage("The date title mandatory")
    .isISO8601()
    .toDate()
    .withMessage("Invalid date received"),
  body("firstName")
    .exists()
    .trim()
    .withMessage("field firstName doesn't exist"),
  body("lastName").exists().trim().withMessage("field lastName doesn't exist"),
  body("email")
    .exists()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email not valid"),
];
