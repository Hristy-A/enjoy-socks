const Register = require('../views/auth/Register');

module.exports = function register(registerRoute) {
  registerRoute
    .get('/', (req, res, next) => res.renderComponent(Register))
    .post('/', (req, res, next) => {

    });

  return registerRoute;
};
