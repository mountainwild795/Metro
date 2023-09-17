const mongoose = require("mongoose");

function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI;

  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB using Mongoose");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the application on database connection error
  });
}

module.exports = connectDB;
