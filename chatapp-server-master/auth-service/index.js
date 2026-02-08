import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import morgan from "morgan";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from 'cookie-parser';
import { corsOptions, CHATTU_TOKEN } from './config/corsOption.js';
import authRouter from './routes/auth.router.js';
import connectDB from './config/db.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(morgan("dev"));

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use('/api/auth', authRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} Mode`);
    console.log(`Server Url: http://localhost:${PORT}`);
});