'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ObjetDeplacement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ObjetDeplacement.init({
    code: DataTypes.STRING,
    libelle: DataTypes.STRING,
    actif: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ObjetDeplacement',
  });
  return ObjetDeplacement;
};