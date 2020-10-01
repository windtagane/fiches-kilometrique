import RolesModel from '../models/Roles';
import Sequelize from 'sequelize';

//const Roles = require('../models/Roles');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite3"
})

export default class RolesController {

    constructor() {}

    index(req, res) {
        const Roles = new RolesModel(sequelize, Sequelize.DataTypes);
        console.log(Roles.findAll());
    }
    show() {}
    create() {}
    edit() {}
    update() {}
    delete() {}
    
}