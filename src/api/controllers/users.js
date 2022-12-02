const { StatusCodes: StatusCode } = require('http-status-codes');

const { User } = require('../../models');
const auth = require('../../middlewares/auth').onUnauth((res) => {
  res.status(StatusCode.UNAUTHORIZED).json({ redirect: '/login' });
});

module.exports = function carts(cartsRoute) {
  cartsRoute.post('/:id', auth, async (req, res, next) => {
    try {
      await User.formOrder(req.session.user, req.body);

      res.sendStatus(StatusCode.OK);
    } catch (error) {
      next();
    }
  });

  return cartsRoute;
};
