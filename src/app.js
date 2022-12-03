require('@babel/register');
require('dotenv').config();

const express = require('express');
const configureApp = require('./config/configureApp');
const mapControllers = require('./lib/mapControllers');

const app = express();

configureApp(app);

mapControllers(app, ['src', 'controllers']);
mapControllers(app, ['src', 'api', 'controllers'], '/api/{controllers}');

app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
