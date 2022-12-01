const { StatusCodes: StatusCode } = require('http-status-codes');

const { User } = require('../../models');
const auth = require('../../middlewares/auth').onUnauth((res) => {
  res.status(StatusCode.UNAUTHORIZED).json({ redirect: '/login' });
});

module.exports = function favorites(favoritesRoute) {
  // ? add all favorites socks from local storage to user on register or login
  favoritesRoute.post('/bulk', auth, async (req, res, next) => {
    try {
      if (req.body && req.body.length > 0) await User.addFavoritesBulk(req.session.user.id, req.body);
      res.sendStatus(StatusCode.CREATED);
    } catch (error) {
      next(error);
    }
  });
  // ? add sock favorites from local storage to user on register or login
  favoritesRoute.post('/', auth, async (req, res, next) => {
    try {
      res.json(await User.addFavorite(req.session.user.id, req.body));
    } catch (error) {
      next(error);
    }
  });

  return favoritesRoute;
};
