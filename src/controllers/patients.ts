import { RequestHandler } from "express";
import { Patient } from "../Entities/Patient";

export const addPatient: RequestHandler = async (req, res) => {
  const { firstName, lastName, email, dateOfBirth } = req.body;

  const result = await Patient.create({
    firstName,
    lastName,
    email,
    dateOfBirth,
  }).save();
  res.send(result);
};
