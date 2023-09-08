import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    throw new Error("connection failed!");
  }
};

export default connectToDB;
