const Favorites = require('../views/Favorites');

module.exports = function register(indexRoute) {
  indexRoute.get('/', async (req, res, next) => {
    res.renderComponent(Favorites);
  });

  return indexRoute;
};
