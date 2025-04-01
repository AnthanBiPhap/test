import mongoose from "mongoose";
import express from 'express';
import { env } from "./helpers/env.helper";
import cors from 'cors'; // Import cors
import dotenv from 'dotenv'; // Import dotenv
import app from "./app";
import Article from './models/article.model'; // Import model Article

dotenv.config(); // Load .env file

const PORT = env.PORT || 8080; // Default to 8080 if env.PORT is undefined

const mongooseDbOptions = {
    autoIndex: true, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
};

const MongoDB_URI = "mongodb://127.0.0.1:27017/article"; // Your MongoDB URI

mongoose
    .connect(MongoDB_URI, mongooseDbOptions)
    .then(() => {
        console.log("Connected to MongoDB Successfully");

        // Bắt đầu server Express
        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to Connect to MongoDB", err);
    });
