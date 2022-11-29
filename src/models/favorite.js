'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {

    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'id'});
      this.belongsTo(models.Sock, { foreignKey: 'id'});
    }
  }
  Favorite.init({
    userId: {
      allowNull:false,
      type:DataTypes.INTEGER,
    },
    sockId: {
      allowNull:false,
      type:DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
