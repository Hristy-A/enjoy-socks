const bcrypt = require('bcrypt');

const {
  Model, ValidationErrorItem,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static async register({
      name, email, phone, password,
    }) {
      if (!name || !email || !phone || !password) {
        const validationError = new ValidationErrorItem();
        validationError.name = 'SequelizeValidationError';
        throw validationError;
      }

      const passhash = await bcrypt.hash(password, 10);

      const user = (await User.create({
        name, email, phone, passhash,
      })).get();

      delete user.passhash;
      delete user?.createdAt;
      delete user?.updatedAt;

      return user;
    }

    static async login({ email, password }) {
      const user = await User.findOne({
        where: { email },
        attributes: ['id', 'name', 'email', 'phone', 'passhash'],
        raw: true,
      });

      if (!user || !await bcrypt.compare(password, user.passhash)) {
        const error = new Error();
        error.name = 'NotFoundError';
        throw error;
      }

      delete user.passhash;
      return user;
    }

    static async addFavoritesBulk(userId, socks) {
      const favoriteSocks = await this.Sock.bulkCreate(socks);
      await this.Favorite.bulkCreate(favoriteSocks.map((favoriteSock) => ({ userId, sockId: favoriteSock.id })));
    }

    static async addCartsBulk(userId, socks) {
      const cartSocks = await this.Sock.bulkCreate(socks);
      await this.Cart.bulkCreate(cartSocks.map((cartSock) => ({ userId, sockId: cartSock.id })));
    }

    static async addFavorite(userId, sock) {
      const favoriteSock = await this.Sock.create(sock);
      await this.Favorite.create({ userId, sockId: favoriteSock.id });
    }

    static async addCart(userId, sock) {
      const cartSock = await this.Sock.create(sock);
      await this.Cart.create({ userId, sockId: cartSock.id });
    }

    static async deleteFavorite(userId, sockId) {
      return User.Favorite.destroy({ where: { userId, sockId } });
    }

    static async deleteCart(userId, sockId) {
      return User.Cart.destroy({ where: { userId, sockId } });
    }

    static async addCartExisting(userId, sockId) {
      return User.Cart.create({ userId, sockId });
    }

    static async getFavorites(userid) {
      return User.findByPk(userid, {
        include: [
          {
            model: this.Sock,
            order: [['createdAt', 'DESC']],
            as: 'favorites',
            include: [
              {
                model: this.Color,
                as: 'color',
              },
              {
                model: this.Pattern,
                as: 'pattern',
              },
              {
                model: this.Image,
                as: 'image',
              },
            ],
          },
        ],
      });
    }

    static async getCarts(userid) {
      return User.findByPk(userid, {
        include: [
          {
            model: this.Sock,
            order: [['createdAt', 'DESC']],
            as: 'purchases',
            include: [
              {
                model: this.Color,
                as: 'color',
              },
              {
                model: this.Pattern,
                as: 'pattern',
              },
              {
                model: this.Image,
                as: 'image',
              },
            ],
          },
        ],
      });
    }

    static async formOrder(user, { name, email, phone }) {
      if (!name || !email || !phone) {
        const validationError = new ValidationErrorItem();
        validationError.name = 'SequelizeValidationError';
        throw validationError;
      }
      const purchaser = await User.getCarts(user.id);
      if (purchaser === null) return [];
      console.log(purchaser.purchases);
      return purchaser.purchases;
    }

    static associate(models) {
      Object.assign(this, models);
      this.favorites = User.belongsToMany(models.Sock, {
        through: models.Favorite,
        foreignKey: 'userId',
        otherKey: 'sockId',
        as: 'favorites',
      });
      this.purchases = User.belongsToMany(models.Sock, {
        through: models.Cart,
        foreignKey: 'userId',
        otherKey: 'sockId',
        as: 'purchases',
      });
    }
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true },
      unique: true,
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    passhash: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
