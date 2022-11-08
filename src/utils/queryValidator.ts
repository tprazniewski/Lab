import { RequestHandler } from "express";
import { kind } from "../Entities/enums/kind";

interface Query {
  date: Date;
  patient_id: string;
  kind: kind;
}

export const queryValidator: RequestHandler = (req, res, next) => {
  const { bloodTest, covidTest } = kind;
  const { date, samplekind, patient_id } = req.query;
  const id = Number(patient_id);
  console.log(typeof samplekind);
  console.log(typeof kind.bloodTest);
  if (samplekind && samplekind !== bloodTest && samplekind !== covidTest) {
    return res.status(404).send({
      message: `The kind of a sample doesn't match the requirements u migh have a white spaces or dont use the upper case letters`,
    });
  }
  console.log(id);
  if (id === NaN) {
    return res.status(404).send({
      message: `The patientId must be a valid number`,
    });
  }
  return next();
};
