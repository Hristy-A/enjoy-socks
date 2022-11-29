const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate(models) {
      Sock.belongsToMany(models.User, {
        through: models.Favorite,
        foreignKey: 'sockId',
        otherKey: 'userId',
        as: 'followers',
      });

      Sock.belongsToMany(models.User, {
        through: models.Cart,
        foreignKey: 'sockId',
        otherKey: 'userId',
        as: 'buyers',
      });
    }
  }
  Sock.init({
    colorId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    imageId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    patternId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    size: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Sock',
  });
  return Sock;
};
