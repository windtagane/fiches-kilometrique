import express from 'express';
import RolesController from '../../src/controllers/RolesController';

const router = express.Router();
const rolesController = new RolesController();

router.get('/', rolesController.index.bind(rolesController));

export default router;
