// config/propertyModel.js

const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  image: String,
  name: String,
  phone: String,
});

const propertySchema = new mongoose.Schema({
  id: Number,
  type: String,
  name: String,
  description: String,
  image: String,
  imageLg: String,
  country: String,
  address: String,
  bedrooms: String,
  bathrooms: String,
  surface: String,
  year: String,
  price: String,
  agent: agentSchema,
});

module.exports = mongoose.model("housequeries", propertySchema);
