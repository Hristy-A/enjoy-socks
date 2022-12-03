const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pattern extends Model {
    static associate(models) {
      this.hasMany(models.Sock, { foreignKey: 'patternId' });
    }
  }
  Pattern.init({
    link: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    origin: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Pattern',
  });
  return Pattern;
};
