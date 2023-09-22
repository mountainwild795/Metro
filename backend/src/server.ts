import app from "./app";
// import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = 5000;

mongoose
  .connect("mongodb://mongodb:27017/metro")
  .then(() => {
    console.log("Mongoose connected");
    app.listen(port, () => {
      console.log("server running on the port " + port);
    });
  })
  .catch(console.error);
