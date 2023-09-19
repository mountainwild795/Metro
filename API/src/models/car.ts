import { InferSchemaType, Schema, model } from "mongoose";

const carScheme = new Schema(
  {
    model: { type: String },
    year: { type: Number },
  },
  { timestamps: true }
);

type Car = InferSchemaType<typeof carScheme>;

export default model<Car>("Car", carScheme);
