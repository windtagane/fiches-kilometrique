'use strict';
const { Model } = require('sequelize');

export default(sequelize, DataTypes) => {
  class Fiches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Fiches.init({
    commentaire: DataTypes.TEXT,
    releveCompteur: DataTypes.INTEGER,
    kmDepart: DataTypes.INTEGER,
    kmArrivee: DataTypes.INTEGER,
    kmParcouru: DataTypes.INTEGER,
    kmParcouruTotal: DataTypes.INTEGER,
    indemnite: DataTypes.FLOAT,
    actif: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Fiches',
  });
  return Fiches;
};