const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./src/config/db");
const propertyRoutes = require("./src/config/propertyRoutes");

const app = express();

const PORT = process.env.PORT;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use(propertyRoutes);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
