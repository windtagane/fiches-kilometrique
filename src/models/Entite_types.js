'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entite_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      console.log(models);
    }
  };
  Entite_types.init({
    code: DataTypes.STRING,
    libelle: DataTypes.STRING,
    actif: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Entite_types',
  });
  return Entite_types;
};