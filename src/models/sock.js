const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate(models) {
      this.followers = Sock.belongsToMany(models.User, {
        through: models.Favorite,
        foreignKey: 'sockId',
        otherKey: 'userId',
        as: 'followers',
      });
      this.buyers = Sock.belongsToMany(models.User, {
        through: models.Cart,
        foreignKey: 'sockId',
        otherKey: 'userId',
        as: 'buyers',
      });

      this.color = Sock.belongsTo(models.Color, {
        foreignKey: 'colorId',
        as: 'color',
      });
      this.image = Sock.belongsTo(models.Image, {
        foreignKey: 'imageId',
        as: 'image',
      });
      this.pattern = Sock.belongsTo(models.Pattern, {
        foreignKey: 'patternId',
        as: 'pattern',
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
