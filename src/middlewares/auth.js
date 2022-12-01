exports.onAuth = function onAuth(handler) {
  return function unauth(req, res, next) {
    if (req.session.user) {
      handler(res);
      return;
    }
    next();
  };
};

exports.onUnauth = function onUnauth(handler) {
  return function auth(req, res, next) {
    if (!req.session.user) {
      handler(res);
      return;
    }
    next();
  };
};
