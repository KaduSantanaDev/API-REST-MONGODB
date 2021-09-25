require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();

mongoose.connect(process.env.CONNENCTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('conectado'));

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(3003, () => {
  console.log('http://localhost:3003');
});
