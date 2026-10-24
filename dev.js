const express = require('express');
const path = require('path');
const api = require('./server.js');

const app = express();
app.use(api);
app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.PORT || 3000, () =>
  console.log('Running at http://localhost:' + (process.env.PORT || 3000)));