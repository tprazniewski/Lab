import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { Sample } from "../Entities/Sample";
import { kind } from "../Entities/enums/kind";

interface Query {
  date: Date;
  patient_id: string;
  samplekind: kind;
}

export const getSamples: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());

  const { date, patient_id, samplekind } = req.query as any as Query;
  console.log("patient_id", patient_id);
  console.log("samplekind", samplekind);
  const samples = await Sample.find({
    where: {
      kind: samplekind ? samplekind : undefined,
      patient: { id: patient_id ? parseInt(patient_id) : undefined },
      order: {
        date,
      },
    },
  });
  console.log("samples", samples);
  return res.send(samples);
};

// get all samples for a given date, patient id, sample kind or a combination of those
