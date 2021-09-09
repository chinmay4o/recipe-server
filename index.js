import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {recipeRouter} from "./router/auth.js";

dotenv.config({path: "./config.env"});
const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());

// mongodb connection 
const url = process.env.MONGO_URI;
mongoose.connect(url , {useNewUrlParser : true , useUnifiedTopology : true});
const conn = mongoose.connection;
conn.on("open" , () => console.log("mongodb connected"));

// routes
app.get("/" , async(req , res) => {
   res.send("hello chinmay!");
});

app.use("/" , recipeRouter);

app.listen(process.env.PORT , () => console.log('listening on port ' + process.env.PORT));