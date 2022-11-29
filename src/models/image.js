'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      this.hasMany(models.Sock, { foreignKey: 'imageId' });
    }
  }
  Image.init({
    link: {
      allowNull:false,
      type:DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
