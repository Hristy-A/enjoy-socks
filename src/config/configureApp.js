const express = require('express');
const path = require('path');
const morgan = require('morgan');
const ssr = require('../middlewares/ssr');

// ? configure app (middlewares and env variables)
module.exports = function configureApp(app) {
  process.env.PORT ??= 3000;

  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(ssr);
  app.use(express.static(path.resolve('public')));
};
