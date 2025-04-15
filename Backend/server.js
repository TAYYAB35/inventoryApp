import express from 'express';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middlewear/errorMiddlewear.js';
import userRoute from './routes/userRoutes.js';


import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB()

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Middleware to parse cookies
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('api is running ...')
})

app.use('/api/users', userRoute)

// error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});