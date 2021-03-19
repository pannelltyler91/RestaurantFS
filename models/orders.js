'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  orders.init({
    totalPrice: DataTypes.STRING,
    item1: DataTypes.STRING,
    item2: DataTypes.STRING,
    item3: DataTypes.STRING,
    item4: DataTypes.STRING,
    item5: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};