module.exports = function getFullUrl(req) {
  return `${req.protocol}://${req.get('host')}`;
};
