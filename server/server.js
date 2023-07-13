const express=require('express');
const dotenv=require('dotenv');
const colors=require('colors');
const morgan=require('morgan');
const cors=require('cors');
const { connectDB } = require('./config/db');


//dot conifg
dotenv.config();


//db Connection
connectDB();


const app=express();


//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
//req,res,middleware
app.use('/api/',require("./routes/testRoutes"));
app.use('/api/auth',require('./routes/authRoutes'));
app.use('/api/inventory',require('./routes/inventoryRoutes'))

//port

const PORT=process.env.PORT || 8080;

//listen
app.listen(PORT,()=>{console.log(`Server is running on ${PORT}`)});