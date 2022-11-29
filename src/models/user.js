const bcrypt = require('bcrypt');

const {
  Model, ValidationErrorItem,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static async register({
      name, email, phone, password,
    }) {
      if (!name || !email || !phone || !password) throw new ValidationErrorItem();

      const passhash = await bcrypt.hash(password, 10);

      const user = await User.create({
        name, email, phone, passhash,
      }, { raw: true });

      delete user.passhash;
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

    static associate(models) {
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

      this.models = models;
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
