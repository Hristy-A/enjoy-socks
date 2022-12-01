const getFullUrl = require('../lib/getFullUrl');

module.exports = function validateSession(req, res, next) {
  if (!req.session.user && req.cookies[req.app.locals.SESSION_COOKIE_NAME]) {
    res.clearCookie(req.app.locals.SESSION_COOKIE_NAME);
    res.redirect(getFullUrl(req));
    return;
  }
  next();
};
