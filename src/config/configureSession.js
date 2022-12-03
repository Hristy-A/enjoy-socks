const session = require('express-session');
const FileStore = require('session-file-store')(session);

module.exports = function configureSession(app) {
  app.locals.SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME;

  return session({
    name: app.locals.SESSION_COOKIE_NAME,
    store: new FileStore(),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: Number(process.env.SESSION_LIVE_TIME_DAYS) * 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: app.get('env') === 'production',
    },
  });
};
