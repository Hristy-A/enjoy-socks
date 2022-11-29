exports.onAuth = function onAuthed(handler) {
  return function auth(req, res, next) {
    if (!req.session.user) {
      handler();
      return;
    }
    next();
  };
};

exports.onAuth = function onUnauthed(handler) {
  return function unauth(req, res, next) {
    if (req.session.user) {
      handler();
      return;
    }
    next();
  };
};
