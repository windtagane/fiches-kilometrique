'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Fiches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      commentaire: {
        type: Sequelize.TEXT
      },
      releveCompteur: {
        type: Sequelize.INTEGER
      },
      kmDepart: {
        type: Sequelize.INTEGER
      },
      kmArrivee: {
        type: Sequelize.INTEGER
      },
      kmParcouru: {
        type: Sequelize.INTEGER
      },
      kmParcouruTotal: {
        type: Sequelize.INTEGER
      },
      indemnite: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Fiches');
  }
};