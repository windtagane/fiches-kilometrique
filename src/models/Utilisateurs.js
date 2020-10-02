'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Utilisateurs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Utilisateurs.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    actif: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Utilisateurs',
  });
  return Utilisateurs;
};