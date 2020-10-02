'use strict';
const { Model } = require('sequelize');

export default (sequelize, DataTypes) => {
  class Vehicules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vehicules.init({
    nom: DataTypes.STRING,
    marque: DataTypes.STRING,
    modele: DataTypes.STRING,
    puissance: DataTypes.STRING,
    annee: DataTypes.STRING,
    immatriculation: DataTypes.STRING,
    chevaux: DataTypes.INTEGER,
    actif: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Vehicules',
  });
  return Vehicules;
};