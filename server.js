const express = require('express');
const connetDB = require('./config/db');

const app=express();

// Connect Database
connetDB();

app.get('/',(req,res)=> res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`server started on port ${PORT}`));