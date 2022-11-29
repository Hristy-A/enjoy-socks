const Register = require('../views/auth/Register');

module.exports = function register(registerRoute) {
  registerRoute
    // ? render register page
    .get('/', (req, res, next) => res.renderComponent(Register))

    // ? register user
    .post('/', (req, res, next) => {
      const { username, password } = req.body;

      try {
        const user = await User.findOne({
          where: { username },
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

  return registerRoute;
};
