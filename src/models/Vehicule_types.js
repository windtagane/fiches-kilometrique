'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicule_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vehicule_types.init({
    code: DataTypes.STRING,
    libelle: DataTypes.STRING,
    actif: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Vehicule_types',
  });
  return Vehicule_types;
};