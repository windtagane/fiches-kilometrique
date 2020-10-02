'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vehicules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      marque: {
        type: Sequelize.STRING
      },
      modele: {
        type: Sequelize.STRING
      },
      puissance: {
        type: Sequelize.STRING
      },
      annee: {
        type: Sequelize.STRING
      },
      immatriculation: {
        type: Sequelize.STRING
      },
      chevaux: {
        type: Sequelize.INTEGER
      },
      actif: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vehicules');
  }
};