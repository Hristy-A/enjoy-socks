'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    static associate(models) {
      this.hasMany(models.Sock, { foreignKey: 'colorId' });
    }
  }
  Color.init({
    link: {
      allowNull:false,
      type:DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};
