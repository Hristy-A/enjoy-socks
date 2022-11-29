const Cart = require('../views/Cart');

module.exports = function register(indexRoute) {
  indexRoute.get('/', async (req, res, next) => {
    res.renderComponent(Cart);
  });

  return indexRoute;
};
