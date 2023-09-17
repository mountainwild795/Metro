// config/propertyRoutes.js

const express = require("express");
const router = express.Router();
const Property = require("./propertyModel");

router.get("/housequeries", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/add-property", async (req, res) => {
  const propertyData = {
    id: 1,
    type: "House",
    name: "House 1",
    description: "Lorem ipsum...",
    image: "House1", // You may need to provide the actual image path or URL here
    imageLg: "House1Lg", // You may need to provide the actual image path or URL here
    country: "United States",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "110000",
    agent: {
      image: "Agent1", // You may need to provide the actual image path or URL here
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  };

  try {
    const newProperty = new Property(propertyData);
    await newProperty.save();
    res.json(newProperty);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE route to delete a property by ID
router.delete("/properties/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found!" });
    }

    await property.remove();
    res.json({ message: "Property deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
