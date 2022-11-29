const Generator = require('../views/Generator');

module.exports = function register(indexRoute) {
  indexRoute.get('/', async (req, res, next) => {
    res.renderComponent(Generator);
  });

  return indexRoute;
};
