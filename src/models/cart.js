'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ User, Sock }) {
      this.belongsTo(User, { foreignKey: 'id' });
      this.belongsTo(Sock, { foreignKey: 'id' });
    }
  }
  Cart.init({
    userId: {
      allowNull:false,
      type:DataTypes.INTEGER,
    },
    sockId: {
      allowNull:false,
      type:DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
