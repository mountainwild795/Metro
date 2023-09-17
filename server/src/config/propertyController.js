// controllers/propertyController.js

const Property = require("../models/propertyModel");

exports.addProperty = async (req, res) => {
  const propertyData = {
    // ... your property data here
  };

  try {
    const newProperty = new Property(propertyData);
    await newProperty.save();
    res.json(newProperty);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
