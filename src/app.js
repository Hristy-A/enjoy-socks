require('@babel/register');
require('dotenv').config();

const express = require('express');
const configureApp = require('./config/configureApp');

const app = express();

configureApp(app);

const index = require('./routes/index');

app.use('/', index);

app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
