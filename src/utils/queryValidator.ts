import { RequestHandler } from "express";
import { kind } from "../Entities/enums/kind";

interface Query {
  date: Date;
  patient_id: string;
  kind: kind;
}
type Params = {};
type ResBody = {};
type ReqBody = {};
type ReqQuery = {
  date: string;
  samplekind: string;
  patient_id: string;
};

export const queryValidator: RequestHandler<
  Params,
  ResBody,
  ReqBody,
  ReqQuery
> = (req, res, next) => {
  const { bloodTest, covidTest } = kind;
  const { date, samplekind, patient_id } = req.query;
  const id = Number(patient_id);
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  const isValidDate = regex.test(date);
  if (samplekind && samplekind !== bloodTest && samplekind !== covidTest) {
    return res.status(404).send({
      message: `The kind of a sample doesn't match the requirements u migh have a white spaces or dont use the upper case letters`,
    });
  }
  if (id === NaN) {
    return res.status(404).send({
      message: `The patientId must be a valid number`,
    });
  }
  if (date && !isValidDate) {
    console.log("weszlo");
    return res.status(404).send({
      message: `The date is invalid`,
    });
  }
  return next();
};
