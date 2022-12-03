const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static async getAllProperties() {
      return {
        colors: await this.Color.findAll({ raw: true }),
        images: await this.Image.findAll({ raw: true }),
        patterns: await this.Pattern.findAll({ raw: true }),
      };
    }

    static associate(models) {
      Object.assign(this, models);
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
        allowNull: true,
      });
      this.pattern = Sock.belongsTo(models.Pattern, {
        foreignKey: 'patternId',
        as: 'pattern',
        allowNull: true,
      });
    }
  }
  Sock.init({
    colorId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    imageId: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    patternId: {
      allowNull: true,
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
