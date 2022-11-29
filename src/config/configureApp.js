/* eslint-disable global-require */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const ssr = require('../middlewares/ssr');
const swap = require('../middlewares/swap');

// ? configure app (middlewares and env variables)
module.exports = function configureApp(app) {
  process.env.PORT ??= 3000;
  const session = require('./configureSession')(app);

  app.use(morgan('dev'));
  app.use(session);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.resolve('public')));
  app.use(swap);
  app.use(ssr);
};
