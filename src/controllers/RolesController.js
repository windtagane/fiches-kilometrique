import RolesModel from '../models/Roles';
import Sequelize from 'sequelize';

//const Roles = require('../models/Roles');

const main_dir = process.cwd();

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite3"
})

export default class RolesController {

    constructor() {
        this.index = this.index.bind(this);
    }

    index(req, res) {
        const Roles = new RolesModel(sequelize, Sequelize.DataTypes);
        Roles.findAll()
            .then(roles => {
                res.render(main_dir + '/views/roles/index', {
                    roles: roles
                });
            })
    }
    show(req, res) {}
    create(req, res) {}
    edit(req, res) {}
    update(req, res) {}
    delete(req, res) {}
    
}