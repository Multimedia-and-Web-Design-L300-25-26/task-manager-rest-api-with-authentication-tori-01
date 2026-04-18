import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000
    });

    console.log("MongoDB connected");
    return true;
  } catch (error) {
    console.error("Database connection failed:", error.message);
    
    // Only exit in production mode
    if (process.env.NODE_ENV === "production") {
      process.exit(1);
    }
    
    throw error;
  }
};

export default connectDB;