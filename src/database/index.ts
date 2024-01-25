import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pinecone:ffaXesJNRkMTn6h1@cluster0.zd5kvja.mongodb.net/income?retryWrites=true&w=majority"
    );
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};
