const renderComponent = require('../lib/renderComponent');

module.exports = function ssr(req, res, next) {
  res.renderComponent = renderComponent; next();
};
