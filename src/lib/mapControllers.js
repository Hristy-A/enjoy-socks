const router = require('express').Router;
const reqAll = require('require-all');
const { resolve } = require('path');

module.exports = function mapControllers(app, paths, pattern = '/{controllers}') {
  const path = resolve(...paths);
  const controllers = reqAll(path);

  for (const controllerName in controllers) {
    let route;
    if (controllerName === 'index') {
      route = pattern.replace('{controllers}', 'index');
    } else {
      route = pattern.replace('{controllers}', controllerName);
    }

    app.use(route, controllers[controllerName](router()));
  }
};
