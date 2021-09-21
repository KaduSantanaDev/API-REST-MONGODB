require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();
mongoose.connect(process.env.CONNENCTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('conectei');
  app.emit('event');
});
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.on('event', () => {
  app.listen(3003, () => {
    console.log('http://localhost:3003');
  });
});
