import RolesModel from '../models/Roles';
import Sequelize from 'sequelize';

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite3"
})

const main_dir = process.cwd();
const Roles = new RolesModel(sequelize, Sequelize.DataTypes);

export default class RolesController {

    constructor() {
        this.index = this.index.bind(this);
    }

    index(req, res) {

        Roles.findAll()
            .then(roles => {
                res.render(main_dir + '/views/roles/index', {
                    roles: roles
                });
            })

    }
    show(req, res) {}
    create(req, res) {

        Roles.create({
            code: req.body.code,
            libelle: req.body.libelle,
            actif: req.body.actif,
            createdAt: new Date(),
            updatedAt: new Date()
        })
            .then(res.redirect('roles/'))
        
    }
    edit(req, res) {

        Roles.findOne({ where: { id: req.params.id } })
            .then(role => {
                res.render(main_dir + '/views/roles/edit', {
                    role: role
                })
            })

    }
    update(req, res) {

        Roles.update({
            libelle: req.body.libelle,
            actif: req.body.actif,
            updatedAt: new Date()
        },
        { 
            where: { id: req.params.id }
        })
            .then(res.redirect('/'))
        
    }
    
    switchStatus(req, res) {

        Roles.update({ 
            actif: req.body.actif,
            updatedAt: new Date() 
        }, 
        { 
            where: { id: req.params.id }
        })
            .then(res.redirect('/'))
        
    }

    delete(req, res) {

        Roles.destroy({
            where: { id: req.params.id }
        })
            .then(res.redirect('/'))
        
    }
    
}