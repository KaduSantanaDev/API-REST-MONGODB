require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();

mongoose.connect('mongodb+srv://kadusantana:k17l07t14@School.hvoiy.mongodb.net/schoolretryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('conectado'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(3003, () => {
  console.log('http://localhost:3003');
});
