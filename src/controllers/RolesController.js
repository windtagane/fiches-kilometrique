import RolesModel from '../models/Roles';
import Sequelize from 'sequelize';
import Shortcut from '../shortcuts/shortcuts';

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite3"
})

const main_dir = process.cwd();
const Roles = new RolesModel(sequelize, Sequelize.DataTypes);
const shortcut = new Shortcut();

export default class RolesController {

    constructor() {
        this.index = this.index.bind(this);
    }

    index(req, res) {

        Roles.findAll()
            .then(roles => {
                
                const countRoles = shortcut.countArray(roles);

                if (countRoles.result === true) {
                    res.render(main_dir + '/views/roles/index', {
                        roles: roles,
                        found: countRoles.count + " résultat(s)"
                    });
                }

                if (countRoles.result === false) {
                    res.render(main_dir + '/views/roles/index', {
                        roles: {},
                        found: "Aucun résultat"
                    });
                }
            })
            .catch(error => {
                res.render(main_dir + '/views/error.ejs', {
                    error: error
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