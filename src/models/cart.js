const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) { }
  }
  Cart.init({
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
    modelName: 'Cart',
  });
  return Cart;
};
