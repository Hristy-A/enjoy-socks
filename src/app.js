require('@babel/register');
require('dotenv').config();

const express = require('express');
const configureApp = require('./config/configureApp');

const app = express();

configureApp(app);

// app.get('/', (req, res) => res.send('<h1>Магазин носков</h1>'));
app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
