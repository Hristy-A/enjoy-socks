const { User } = require('../../models');

module.exports = function users(usersRoute) {
  // ? add all favorites socks from local storage to user on register or login
  usersRoute.post('/:id/favorites/bulk', async (req, res, next) => {
    try {
      User.addFavoritesBulk(req.params.id, req.body);
    } catch (error) {
      next(error);
    }
  });
  // ? add sock favorites from local storage to user on register or login
  usersRoute.post('/:id/favorites', async (req, res, next) => {
    try {
      User.addFavorite(req.params.id, req.body);
    } catch (error) {
      next(error);
    }
  });

  usersRoute.post('/:id/carts/bulk', async (req, res, next) => {
    res.send('hi');
  });
  usersRoute.post('/:id/carts', async (req, res, next) => {
    res.send('hi');
  });

  return usersRoute;
};
