const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to Database`);
  } catch (error) {
    console.log("Error:", error);
  }
};
module.exports = connectDb;
