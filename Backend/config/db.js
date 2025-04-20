import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

// Get the current directory name
// __dirname is not available in ES modules, so we need to use fileURLToPath and path.dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Set the path to the .env file
const envPath = path.join(__dirname, '../.env');
dotenv.config({ path: envPath });  // Load environment variables from the .env file


// Use mongoose to connect to the MongoDB database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;