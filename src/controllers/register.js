const { User } = require('../models');
const unauth = require('../middlewares/auth').onAuth((res) => res.redirect('/'));

const Register = require('../views/auth/Register');

module.exports = function register(registerRoute) {
  registerRoute
    // ? render register page
    .get('/', unauth, (req, res, next) => res.renderComponent(Register))

    // ? register user
    .post('/', unauth, async (req, res, next) => {
      try {
        req.session.user = await User.register(req.body);
        req.session.save(() => res.redirect('/'));
      } catch (error) {
        switch (error.name) {
          case 'SequelizeValidationError':
            res.renderComponent(Register, { duplicate: true });
            break;
          case 'SequelizeUniqueConstraintError':
            res.renderComponent(Register, { validation: true });
            break;
          default:
            next(error);
        }
      }
    });

  return registerRoute;
};
