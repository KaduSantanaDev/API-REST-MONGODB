const express = require('express');
const routes = require('./src/routes');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3003, () => {
  console.log('http://localhost:3003');
});
