const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.hasMany(models.Sock, { foreignKey: 'imageId' });
    }
  }
  Image.init({
    link: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
