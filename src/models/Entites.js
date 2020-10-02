'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
	class Entites extends Model {
		
		static associate(models) {
		// define association here
			this.hasOne(models.Entite_types, { foreignKey: 'id' })
		}
		
	};

	Entites.init({
		code: DataTypes.STRING,
		nom: DataTypes.STRING,
		actif: DataTypes.BOOLEAN
	}, {
		sequelize,
		modelName: 'Entites',
	});

  	return Entites;
};