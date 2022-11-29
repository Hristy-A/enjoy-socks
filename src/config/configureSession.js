const session = require('express-session');
const FileStore = require('session-file-store')(session);

module.exports = function configureSession(app) {
  return session({
    name: 'sid',
    store: new FileStore(),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 2,
      httpOnly: true,
      secure: app.get('env') === 'production',
    },
  });
};
