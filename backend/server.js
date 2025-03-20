require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors")
const authrouter = require("./router/auth-router");
const connectdb = require('./Utils/db');
const adminroute = require("./router/admin-route");


const corsOptions ={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
} 
app.use(cors(corsOptions));


app.use(express.json());
app.use('/', authrouter);
app.use('/register',authrouter);
app.use('/contact',authrouter);
app.use('/admin',adminroute);

const PORT = 5000;


connectdb().then(()=>{
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
});
});