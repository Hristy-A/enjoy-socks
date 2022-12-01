const LoaderCarts = require('../views/sys/LoaderCarts');

module.exports = function register(cartsRoute) {
  cartsRoute.get('/', async (req, res, next) => {
    res.renderComponent(LoaderCarts);
  });

  return cartsRoute;
};
