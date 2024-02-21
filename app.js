// Basic Configuration Lib Import
const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const cookieParser = require('cookie-parser')


// Security Middleware Lib Import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors'); 
const hpp = require('hpp'); 

// Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Rate Limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    message: "Too many requests from this IP, please try again later."
})
app.use(limiter);


// Database Lib Import
const mongoose = require('mongoose'); 


let URI = "mongodb+srv://demoDatabase:1234@cluster0.gdvqevi.mongodb.net/Sales_Analytics_API"
let OPTION = { user: "", pass: "", autoIndex: true }

mongoose
  .connect(URI, OPTION)
  .then(() => console.log("Database is Connected."))
  .catch((err) => console.log(err))


// Routing Implement
app.use("/api/sales", router)

// Undefined Route Implement
app.use('*', (req,res)=>{
    res.status(404).json({status: "Failed!", data: "404 Error! Wrong route!"});
})


module.exports=app;
