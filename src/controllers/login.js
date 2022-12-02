const { StatusCodes: StatusCode } = require('http-status-codes');

const { User } = require('../models');
const unauth = require('../middlewares/auth').onAuth((res) => res.redirect('/'));

const Login = require('../views/auth/Login');

module.exports = function register(loginRoute) {
  loginRoute
    // ? render login page
    .get('/', unauth, (req, res, next) => res.renderComponent(Login))

    // ? login user
    .post('/', unauth, async (req, res, next) => {
      try {
        req.session.user = await User.login(req.body);
        req.session.save(() => res.json({ redirect: '/' }));
      } catch (error) {
        switch (error.name) {
          case 'NotFoundError':
            res.status(StatusCode.BAD_REQUEST).json({ notfound: true });
            break;
          case 'ValidationErrorItem':
            res.status(StatusCode.BAD_REQUEST).json({ validation: true });
            break;
          default:
            next(error);
        }
      }
    });

  return loginRoute;
};
