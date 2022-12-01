const Loader = require('../views/sys/Loader');

module.exports = function register(favoritesRoute) {
  favoritesRoute.get('/', async (req, res, next) => {
    res.renderComponent(Loader);
  });

  return favoritesRoute;
};
