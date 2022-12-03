const auth = require('../middlewares/auth').onUnauth((res) => res.redirect('/'));

module.exports = function register(logoutRoute) {
  logoutRoute
    // ? logout user
    .get('/', auth, (req, res, next) => {
      req.session.destroy((error) => {
        if (error) next(error);

        res.clearCookie(req.app.locals.SESSION_COOKIE_NAME);
        res.redirect('/');
      });
    });

  return logoutRoute;
};
