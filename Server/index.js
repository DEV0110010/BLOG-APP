import express from "express";
import connectToMongo from "./config/db.js";
import cors from 'cors';
import authRoutes from "./routes/blog.js";
const app = express();
const PORT = 9000;

connectToMongo();

app.use(cors());

app.use(express.json());
app.use(express.static("public/upload"))

app.get("/",(req, res)=>{
    res.send("API is Running...")
})

// API Routes
app.use ("/api/v1", authRoutes)


app.listen(PORT,()=>{
    console.log(`APP is Running on http://localhost:${PORT}`);   
})
