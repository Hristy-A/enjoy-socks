const { StatusCodes: StatusCode } = require('http-status-codes');

const { User } = require('../../models');
const auth = require('../../middlewares/auth').onUnauth((res) => {
  res.status(StatusCode.UNAUTHORIZED).json({ redirect: '/login' });
});

module.exports = function carts(cartsRoute) {
  cartsRoute.post('/bulk', auth, async (req, res, next) => {
    try {
      if (req.body && req.body.length > 0) await User.addCartsBulk(req.session.user.id, req.body);
      res.sendStatus(StatusCode.CREATED);
    } catch (error) {
      next(error);
    }
  });
  cartsRoute.post('/', auth, async (req, res, next) => {
    try {
      res.json(await User.addCart(req.session.user.id, req.body));
    } catch (error) {
      next(error);
    }
  });

  return cartsRoute;
};
