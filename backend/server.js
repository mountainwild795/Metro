const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB function
// Connect to MongoDB function
const connectDB = () => {
  return new Promise((resolve, reject) => {
    const MONGODB_URI = process.env.MONGODB_URI;

    mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB using Mongoose");
      resolve(); // Resolve the promise when connection is successful
    });

    mongoose.connection.on("error", (err) => {
      console.error("Error connecting to MongoDB:", err);
      reject(err); // Reject the promise with the error
      process.exit(1);
    });
  });
};

// Property model
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

const Property = mongoose.model("housequeries", propertySchema);

// Function to seed the database
const seedDatabase = async () => {
  const count = await Property.countDocuments();

  if (count === 0) {
    // Your hardcoded data
    const housesData = [
      {
        id: 1,
        type: "House",
        name: "House 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: "Metro/src/assets/img/houses/house1.png",
        imageLg: "Metro/backend/public/assets/img/houses/house1lg.png",
        country: "United States",
        address: "7240C Argyle St. Lawndale, CA 90260",
        bedrooms: "6",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2016",
        price: "110000",
        agent: {
          image: "Metro/backend/public/assets/img/agents/agent1.png",
          name: "Patricia Tullert",
          phone: "0123 456 78910",
        },
      },
      {
        id: 2,
        type: "House",
        name: "House 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: "Metro/src/assets/img/houses/house2.png",
        imageLg: "Metro/backend/public/assets/img/houses/house2lg.png",
        country: "Canada",
        address: "798 Talbot St. Bridgewater, NJ 08807",
        bedrooms: "6",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2016",
        price: "140000",
        agent: {
          image: "Metro/backend/public/assets/img/agents/agent2.png",
          name: "Daryl Hawker",
          phone: "0123 456 78910",
        },
      },
      {
        id: 3,
        type: "House",
        name: "House 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: "Metro/src/assets/img/houses/house3.png",
        imageLg: "Metro/backend/public/assets/img/houses/house3lg.png",
        country: "United States",
        address: "2 Glen Creek St. Alexandria, VA 22304",
        bedrooms: "6",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2016",
        price: "170000",
        agent: {
          image: "Metro/backend/public/assets/img/agents/agent3.png",
          name: "Amado Smith",
          phone: "0123 456 78910",
        },
      },
      {
        id: 4,
        type: "House",
        name: "House 4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: "Metro/src/assets/img/houses/house4.png",
        imageLg: "Metro/backend/public/assets/img/houses/house4lg.png",
        country: "Canada",
        address: "84 Woodland St. Cocoa, FL 32927",
        bedrooms: "6",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2016",
        price: "200000",
        agent: {
          image: "Metro/backend/public/assets/img/agents/agent4.png",
          name: "Kaitlyn Gonzalez",
          phone: "0123 456 78910",
        },
      },
      {
        id: 5,
        type: "House",
        name: "House 5",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: "Metro/src/assets/img/houses/house5.png",
        imageLg: "Metro/backend/public/assets/img/houses/house5lg.png",
        country: "United States",
        address: "28 Westport Dr. Warminster, PA 18974",
        bedrooms: "5",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2015",
        price: "210000",
        agent: {
          image: "Metro/backend/public/assets/img/agents/agent5.png",
          name: "Grover Robinson",
          phone: "0123 456 78910",
        },
      },
      {
        id: 6,
        type: "House",
        name: "House 6",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: "Metro/src/assets/img/houses/house6.png",
        imageLg: "Metro/backend/public/assets/img/houses/house6lg.png",
        country: "Canada",
        address: "32 Pawnee Street Butte, MT 59701",
        bedrooms: "6",
        bathrooms: "3",
        surface: "6200 sq ft",
        year: "2014",
        price: "220000",
        agent: {
          image: "Metro/backend/public/assets/img/agents/agent6.png",
          name: "Karen Sorensen",
          phone: "0123 456 78910",
        },
      },
    ];

    try {
      await Property.insertMany(housesData);
      console.log("Database seeded!");
    } catch (error) {
      console.error("Error seeding the database:", error);
    }
  }
};

// Property routes
const propertyRoutes = express.Router();

propertyRoutes.get("/housequeries", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

propertyRoutes.post("/add-property", async (req, res) => {
  const propertiesData = req.body;

  const savedProperties = [];

  try {
    // Check if propertiesData is an array
    if (Array.isArray(propertiesData)) {
      for (const propertyData of propertiesData) {
        const newProperty = new Property(propertyData);
        await newProperty.save();
        savedProperties.push(newProperty);
      }
    } else {
      // Handle case where propertiesData is a single object
      const newProperty = new Property(propertiesData);
      await newProperty.save();
      savedProperties.push(newProperty);
    }

    res.json(savedProperties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

propertyRoutes.delete("/properties/:_id", async (req, res) => {
  try {
    const property = await Property.findById(req.params._id);

    if (!property) {
      return res.status(404).json({ message: "Property not found!" });
    }

    await property.remove();
    res.json({ message: "Property deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Initialize the express app
const app = express();

const PORT = process.env.PORT || 8080;

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB().then(() => seedDatabase());

// Use Property routes
app.use("/", propertyRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
