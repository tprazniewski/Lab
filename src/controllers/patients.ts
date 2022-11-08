import { RequestHandler } from "express";
import { Patient } from "../Entities/Patient";
import { validationResult } from "express-validator";
export const addPatient: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());
  const { firstName, lastName, email, dateOfBirth } = req.body;
  try {
    const result = await Patient.create({
      firstName,
      lastName,
      email,
      dateOfBirth,
    }).save();
    return res.send(result);
  } catch (error) {
    return res.status(404).send(error);
  }
};
