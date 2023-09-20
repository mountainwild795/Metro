const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

const imageSchema = new mongoose.Schema({
  imageData: Buffer,
  contentType: String,
});

const Image = mongoose.model("Image", imageSchema);

// Initialize the express app
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Route to fetch an image
app.get("/image/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).send("Image not found");

    res.set("Content-Type", image.contentType);
    res.send(image.imageData);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
