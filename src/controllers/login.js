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
