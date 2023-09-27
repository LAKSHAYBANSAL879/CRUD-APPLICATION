require('dotenv').config();
const express = require('express');

const cors = require("cors");

const connectDb = require('./config/db.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 

connectDb();

const userroutes = require('./routes/userroutes.js');
app.use('/', userroutes); 

module.exports = app;
