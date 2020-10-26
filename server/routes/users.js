import express from 'express';
import UsersController from '../../src/controllers/UsersController';

const router = express.Router();
const usersController = new UsersController();

router.get('/', usersController.index.bind(usersController));
router.get('/add', usersController.add.bind(usersController));
router.post('/create', usersController.create.bind(usersController));
router.get('/edit/:id', usersController.edit.bind(usersController));
router.post('/update/:id', usersController.update.bind(usersController));

export default router;

