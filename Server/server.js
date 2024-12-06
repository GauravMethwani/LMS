require("dotenv").config()
const express = require("express");
const cors= require("cors");
const { connection } = require("mongoose");
const mongoose =require('mongoose')

const app = express();
const PORT= process.env.PORT || 5000
const MONGO_URL=process.env.MONGO_URL;


cors({
    origin:process.env.CLIENT_UR,
    method:["GET","POST","DELETE","PUT"],
    allowedHeaders:['Content-Type', 'Authorization'] 
})

app.use(express.json());

// database connection
mongoose
 .connect(MONGO_URL)
 .then(()=>console.log('MONGODB is connected'))
 .catch(e=>console.log(e))

 //router configuration

 app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong"
    })
 })

 app.listen(PORT,()=>{
    console.log(`Srever is running on post ${PORT}`)
 })