// const mongoose = require("mongoose");
// const fs = require("fs");
// const path = require("path");

// const imageSchema = new mongoose.Schema({
//   imageData: Buffer,
//   contentType: String,
// });

// const Image = mongoose.model("Image", imageSchema);

// const storeImages = async () => {
//   const imagePaths = [
//     "Metro/src/assets/img/MetroNZImages/pexels-athena-2497634.jpeg",
//     "Metro/src/assets/img/MetroNZImages/pexels-christa-grover-2121121.jpeg",
//     "Metro/src/assets/img/MetroNZImages/pexels-gül-işık-2128329.jpeg",
//     "Metro/src/assets/img/MetroNZImages/pexels-jahnae-neal-2604670.jpeg",
//     "Metro/src/assets/img/MetroNZImages/pexels-pixabay-415687.jpeg",
//     "Metro/src/assets/img/MetroNZImages/pexels-thgusstavo-santana-2102587.jpeg",
//   ];

//   for (const imgPath of imagePaths) {
//     try {
//       const imagePath = path.resolve(__dirname, imgPath);
//       const imageData = fs.readFileSync(imagePath);
//       const image = new Image({
//         imageData,
//         contentType: "image/jpeg", // assuming all images are jpg, adjust if needed
//       });
//       await image.save();
//       console.log(`Stored ${imgPath} to database.`);
//     } catch (error) {
//       console.error(`Error storing ${imgPath}: `, error);
//     }
//   }
// };

// module.exports = storeImages;
