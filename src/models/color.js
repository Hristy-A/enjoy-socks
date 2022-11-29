const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    static associate(models) {
      Color.hasMany(models.Sock, { foreignKey: 'colorId' });
    }
  }
  Color.init({
    link: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};
