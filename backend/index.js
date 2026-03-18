import express from 'express';
import dotenv, { config } from 'dotenv';
import mongoose from 'mongoose';
import chatbotRoutes from "./routes/chatbot.routes.js";
import cors from 'cors';

const app = express()
dotenv.config();

const port = process.env.PORT || 3000

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(cors());

app.use(express.json());

// Database Connection 

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
console.log("Connected to Database")
}).catch((err)=>{
    console.log("Error connected to mongoDB: ", err)
})

// Defining Routes

app.use("/bot/v1/", chatbotRoutes )

app.listen(port, () => {
  console.log(`Server is running on Portx ${port}`)
})
