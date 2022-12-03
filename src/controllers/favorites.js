const LoaderFavorites = require('../views/sys/LoaderFavorites');

module.exports = function register(favoritesRoute) {
  favoritesRoute.get('/', async (req, res, next) => {
    res.renderComponent(LoaderFavorites);
  });

  return favoritesRoute;
};
