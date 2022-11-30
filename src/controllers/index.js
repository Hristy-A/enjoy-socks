const Home = require('../views/Home');

module.exports = function register(indexRoute) {
  indexRoute.get('/', async (req, res, next) => {
    res.renderComponent(Home);
  });

  return indexRoute;
};
