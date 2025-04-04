require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors")
const authrouter = require("./router/auth-router");
const connectdb = require('./Utils/db');
const adminroute = require("./router/admin-route");
const path = require("path");


const corsOptions ={
    origin:"https://hotel-2-fkkj.onrender.com/index",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
} 
app.use(cors(corsOptions));

const _dirname = path.resolve();

app.use(express.json());
app.use('/', authrouter);
app.use('/register',authrouter);
app.use('/contact',authrouter);
app.use('/admin',adminroute);
app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

const PORT = 5000;



connectdb().then(()=>{
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
});
});