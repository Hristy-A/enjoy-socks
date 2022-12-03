const { StatusCodes: StatusCode } = require('http-status-codes');
const fetch = require('node-fetch');
const getBaseUrl = require('../lib/getBaseUrl');
const { Image, Pattern, Color } = require('../models');
const Favorites = require('../views/Favorites');

module.exports = function register(renderFavoritesRoute) {
  renderFavoritesRoute.post('/', async (req, res, next) => {
    if (req.session.user) {
      const response = await fetch(
        `${getBaseUrl(req)}/api/favorites`,
        {
          method: 'GET',
          headers: { cookie: `${req.app.locals.SESSION_COOKIE_NAME}=${req.cookies[req.app.locals.SESSION_COOKIE_NAME]}` },
        },
      );
      const socks = await response.json() ?? [];
      res.renderComponent(Favorites, { socks: socks.favorites });
    } else {
      let socks = [];
      if (Array.isArray(req.body)) {
        const images = await Image.findAll({ raw: true });
        const colors = await Color.findAll({ raw: true });
        const patterns = await Pattern.findAll({ raw: true });
        socks = req.body.map((sock) => {
          sock.image = images.find((image) => image.id === sock.imageId) ?? null;
          sock.color = colors.find((color) => color.id === sock.colorId);
          sock.pattern = patterns.find((pattern) => pattern.id === sock.patternId) ?? null;
          return sock;
        });
      }

      res.status(StatusCode.UNAUTHORIZED).renderComponent(Favorites, { socks });
    }
  });

  return renderFavoritesRoute;
};
