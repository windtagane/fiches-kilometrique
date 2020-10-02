'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
	class Entite_types extends Model {

		static associate(models) {
			this.belongsTo(models.Entites);
			this.hasMany(models.Entites);
		}

	};

	Entite_types.init({
		code: DataTypes.STRING,
		libelle: DataTypes.STRING,
		actif: DataTypes.BOOLEAN
	}, {
		sequelize,
		modelName: 'Entite_types'
	});

	return Entite_types;
};