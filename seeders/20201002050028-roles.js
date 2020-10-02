'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {

		await queryInterface.bulkInsert('Roles', [
			{
				code: "ADMINISTRATEUR",
				libelle: "Administrateur",
				actif: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				code: "UTILISATEUR",
				libelle: "Utilisateur",
				actif: true,
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {});

	},
	down: async (queryInterface, Sequelize) => {

		await queryInterface.bulkDelete('Roles', null, {});

	}
};
