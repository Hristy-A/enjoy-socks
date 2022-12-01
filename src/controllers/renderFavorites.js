const fetch = require('node-fetch');
const getBaseUrl = require('../lib/getBaseUrl');
const Favorites = require('../views/Favorites');

module.exports = function register(indexRoute) {
  indexRoute.post('/', async (req, res, next) => {
    let socks;

    if (req.session.user) {
      const response = await fetch(
        `${getBaseUrl()}/api/favorites`,
        {
          method: 'GET',
          headers: { cookie: `${req.app.locals.SESSION_COOKIE_NAME}=${req.cookies[req.app.locals.SESSION_COOKIE_NAME]}` },
        },
      );
      socks = await response.json();
    } else {
      socks = req.body;
    }

    res.renderComponent(Favorites, socks);
  });

  return indexRoute;
};
