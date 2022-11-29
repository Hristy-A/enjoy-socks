module.exports = function register(logoutRoute) {
  logoutRoute
    // ? logout user
    .get('/', (req, res, next) => {
      req.session.destroy((error) => {
        if (error) next(error);

        res.clearCookie('user_id');
        res.redirect('/');
      });
    });

  return logoutRoute;
};