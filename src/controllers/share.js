const { User } = require('../models');
const ShowSock = require('../views/ShowSock');

module.exports = function register(shareRoute) {
  shareRoute.get('/', async (req, res, next) => {
    const sock = await User.getCardInfo(Number(req.query.color), Number(req.query.pattern), Number(req.query.image));
    res.renderComponent(ShowSock, { sock });
  });

  return shareRoute;
};
