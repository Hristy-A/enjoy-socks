const express = require('express');
const morgan = require('morgan');

// ? configure app (middlewares and env variables)
module.exports = function configureApp(app) {
  process.env.PORT ??= 3000;

  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
