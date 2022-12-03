const Generator = require('../views/Generator');
const { Sock } = require('../models');

module.exports = function register(indexRoute) {
  indexRoute.get('/', async (req, res, next) => {
    res.renderComponent(Generator, { ...(await Sock.getAllProperties()) });
  });

  return indexRoute;
};
