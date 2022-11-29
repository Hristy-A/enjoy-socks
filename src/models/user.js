'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Favorite, { foreignKey: 'userId' });
      this.hasMany(models.Cart, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true }, 
    },
    phone: {
      allowNull:false,
      type:DataTypes.STRING,
    },
    passhash: {
      allowNull:false,
      type:DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};