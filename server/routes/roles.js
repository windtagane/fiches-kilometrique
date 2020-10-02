import express from 'express';
import RolesController from '../../src/controllers/RolesController';

const router = express.Router();
const rolesController = new RolesController();

router.get('/', rolesController.index.bind(rolesController));
router.post('/create', rolesController.create.bind(rolesController));
router.get('/edit/:id', rolesController.edit.bind(rolesController));
router.post('/update/:id', rolesController.update.bind(rolesController));
router.post('/switchstatus/:id', rolesController.switchStatus.bind(rolesController));
router.post('/delete/:id', rolesController.delete.bind(rolesController));

export default router;
