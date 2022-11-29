const { User } = require('../models');

const Login = require('../views/auth/Login');

module.exports = function register(loginRoute) {
  loginRoute
    // ? render login page
    .get('/', (req, res, next) => res.renderComponent(Login))

    // ? login user
    .post('/', async (req, res, next) => {
      try {
        req.session.user = await User.login(req.body);
        req.session.save(() => res.redirect('/'));
      } catch (error) {
        switch (error.name) {
          case 'NotFoundError':
            res.renderComponent(Login, { notfound: true });
            break;
          case 'SequelizeValidationError':
            res.renderComponent(Login, { validation: true });
            break;
          default:
            next(error);
        }
      }
    });

  return loginRoute;
};
