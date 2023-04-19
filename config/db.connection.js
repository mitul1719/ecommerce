import mongoose from "mongoose";

const db = async () => {
  try {
    console.log("Trying to connect database...");
    const connection = await mongoose.connect(process.env.mongouri);
    console.log("Database connected");
  } catch (error) {
    console.log("Database error");
  }
};

export default db;
