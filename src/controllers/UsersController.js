import UsersModel from '../models/Utilisateurs';
import RolesModel from '../models/Roles';
import Sequelize from 'sequelize';

import Shortcut from '../shortcuts/shortcuts';

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite3"
})

const main_dir = process.cwd();
const shortcut = new Shortcut();
const Users = new UsersModel(sequelize, Sequelize.DataTypes);
const Roles = new RolesModel(sequelize, Sequelize.DataTypes);

export default class UsersController {

    constructor() {
        this.index = this.index.bind(this);
    }

    index(req, res) {

        Users.findAll()
            .then(users => {
                
                const countRoles = shortcut.countArray(users);

                if (countRoles.result === true) {
                    res.render(main_dir + '/views/users/index', {
                        users: users,
                        found: countRoles.count
                    });
                }

                if (countRoles.result === false) {
                    res.render(main_dir + '/views/users/index', {
                        users: {},
                        found: "Aucun résultat"
                    });
                }

            })
            .catch(error => {
                
                res.render(main_dir + '/views/error', {
                    error: error
                })

            })
            
    }
    show(req, res) {}

    add(req, res) {

        Roles.findAll({ where: {actif: true} })
            .then(roles => {
                res.render(main_dir + '/views/users/add', {
                    roles: roles
                });
            })
        
    }
    create(req, res) {

        Users.create({
            nom: req.body.code,
            prenom: req.body.libelle,
            actif: req.body.actif,
            role: req.body.role,
            createdAt: new Date(),
            updatedAt: new Date()
        })
            .then(res.redirect('users/'))
            .catch(error => {
                console.log(error)
            })
        
    }
    edit(req, res) {

        Users.findOne({ where: { id: req.params.id } })
            .then(user => {
                res.render(main_dir + '/views/users/edit', {
                    user: user
                })
            })
            .catch(error => {
                console.log(error)
            })

    }
    update(req, res) {

        Users.update({
            libelle: req.body.libelle,
            actif: req.body.actif,
            updatedAt: new Date()
        },
        { 
            where: { id: req.params.id }
        })
            .then(res.redirect('/'))
            .catch(error => {
                console.log(error)
            })
        
    }
    
    switchStatus(req, res) {

        Users.update({ 
            actif: req.body.actif,
            updatedAt: new Date() 
        }, 
        { 
            where: { id: req.params.id }
        })
            .then(res.redirect('/'))
            .catch(error => {
                console.log(error)
            })
        
    }

    delete(req, res) {

        Users.destroy({
            where: { id: req.params.id }
        })
            .then(res.redirect('/'))
            .catch(error => {
                console.log(error)
            })
        
    }
    
}