module.exports = function register(indexRoute) {
  indexRoute.get('/', async (req, res, next) => {
    res.send('hi');
  });

  return indexRoute;
};
