// const fs = require("fs");
// const { default: mongoose } = require("mongoose");
// const path = require("path"); // Assuming you move the mongoose model definition to its own file as well.

// const imageSchema = new mongoose.Schema({
//   imageData: Buffer,
//   contentType: String,
// });

// const Image = mongoose.model("Image", imageSchema);

// const storeImages = async () => {
//   const imagePaths = [
//     path.join(
//       __dirname,
//       "../src/assets/img/MetroNZImages/pexels-athena-2497634.jpeg"
//     ),
//     path.join(
//       __dirname,
//       "../src/assets/img/MetroNZImages/pexels-christa-grover-2121121.jpeg"
//     ),
//     path.join(
//       __dirname,
//       "../src/assets/img/MetroNZImages/pexels-gül-işık-2128329.jpeg"
//     ),
//     path.join(
//       __dirname,
//       "../src/assets/img/MetroNZImages/pexels-jahnae-neal-2604670.jpeg"
//     ),
//     path.join(
//       __dirname,
//       "../src/assets/img/MetroNZImages/pexels-pixabay-415687.jpeg"
//     ),
//     path.join(
//       __dirname,
//       "../src/assets/img/MetroNZImages/pexels-thgusstavo-santana-2102587.jpeg"
//     ),
//   ];

//   for (const imagePath of imagePaths) {
//     try {
//       const imageData = fs.readFileSync(imagePath);
//       const image = new Image({
//         imageData,
//         contentType: "image/jpeg", // assuming all images are jpg, adjust if needed
//       });
//       await image.save();
//       console.log(`Stored ${imagePath} to database.`);
//     } catch (error) {
//       console.error(`Error storing ${imagePath}: `, error);
//     }
//   }
// };

// // Store the images (for testing purposes, you might not want to do this every time you start the server in a real-world scenario)
// storeImages();
