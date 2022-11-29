const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Sock, {
        through: models.Favorite,
        foreignKey: 'userId',
        otherKey: 'sockId',
        as: 'favorites',
      });

      User.belongsToMany(models.Sock, {
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
