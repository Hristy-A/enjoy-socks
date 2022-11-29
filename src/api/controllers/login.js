const Login = require('../../views/auth/Register');

module.exports = function register(loginRoute) {
  loginRoute
    // ? render login page
    .get('/', (req, res, next) => res.renderComponent(Login))

    // ? login user
    .post('/', (req, res, next) => {
      const { email, password } = req.body;

      try {
        const user = await User.findOne({
          where: { email },
          attributes: ['id', 'username', 'passhash'],
          raw: true,
        });
  
        if (!user || !await bcrypt.compare(password, user.passhash)) {
          res.renderComponent(Login, { error: 'Incorrect username or password' });
          return;
        }
  
        delete user.passhash;
        req.session.user = user;
        req.session.save(() => {
          res.redirect('/');
        });
      } catch (error) {
        next(error);
      }
    });

  return loginRoute;
};
