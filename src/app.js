require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

process.env.PORT ??= 3000;

const app = express();

app.get('/', (req, res) => res.send('<h1>Магазин носков</h1>'));

app.listen(process.env.PORT);
