'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate(models) {
      this.hasMany(models.Favorite, { foreignKey: 'sockId' });
      this.hasMany(models.Cart, { foreignKey: 'sockId' });
      this.belongsTo(models.Color, { foreignKey: 'id'});
      this.belongsTo(models.Image, { foreignKey: 'id'});
      this.belongsTo(models.Pattern, { foreignKey: 'id'});
    }
  }
  Sock.init({
    colorId: {
      allowNull:false,
      type:DataTypes.INTEGER,
    },
    imageId: {
      allowNull:false,
      type:DataTypes.INTEGER,
    },
    patternId: {
      allowNull:false,
      type:DataTypes.INTEGER,
    },
    price: {
      allowNull:false,
      type:DataTypes.INTEGER,
    },
    size: {
      allowNull:false,
      type:DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Sock',
  });
  return Sock;
};