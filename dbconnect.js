const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1/urlshortner";

async function connecttomongo() {
  try {
    await mongoose.connect(mongoURI)
      console.log("connected to mongodb successfully");
    }catch (error) {
    console.log("error connecting mongodb ", error);
  }
}

module.exports = connecttomongo