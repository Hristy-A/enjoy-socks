const { render } = require('react-dom');

module.exports = function swap(req, res, next) {
  res.locals.user = req.session.user;
  next();
};
