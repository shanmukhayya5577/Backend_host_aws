const express = require('express');
const app = express();

//importing app middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connected BD
require('dotenv').config();
require('./DB');

//imporing routing middleware
const router = require('./routes/routes');
app.use('/',router);

app.get('/',(req,res,next)=>{
    res.send('Wel COme NodeJS')
});

module.exports = app;