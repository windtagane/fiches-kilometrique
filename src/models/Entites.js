'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Entites.init({
    code: DataTypes.STRING,
    nom: DataTypes.STRING,
    actif: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Entites',
  });
  return Entites;
};