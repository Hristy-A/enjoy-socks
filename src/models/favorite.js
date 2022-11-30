const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) { }
  }
  Favorite.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    sockId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
