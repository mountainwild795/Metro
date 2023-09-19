import mongoose from "mongoose";

const houseSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  country: String,
  address: String,
  bedrooms: String,
  bathrooms: String,
  surface: String,
  year: String,
  price: String,
});

export const House = mongoose.model("house", houseSchema);
