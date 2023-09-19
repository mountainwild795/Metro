import { InferSchemaType, Schema, model } from "mongoose";

const houseScheme = new Schema(
  {
    name: { type: String },
    description: { type: String },
    country: { type: String },
    address: { type: String },
    bedrooms: { type: String },
    bathrooms: { type: String },
    surface: { type: String },
    year: { type: String },
    price: { type: String },
  },
  { timestamps: true }
);

type House = InferSchemaType<typeof houseScheme>;

export default model<House>("House", houseScheme);
