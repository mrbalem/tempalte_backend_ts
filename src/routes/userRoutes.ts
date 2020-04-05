/** @format */

import express from 'express';

const router = express.Router();
import usersController from '@controllers/userController';

router.get('/users/', usersController.getCalzadosAll);

export default router;
