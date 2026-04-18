import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB only if not in test mode
if (process.env.NODE_ENV !== "test") {
  connectDB();
} else {
  // For test mode, still try to connect but with better error handling
  connectDB().catch((error) => {
    console.warn("Database connection warning in test mode:", error.message);
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});