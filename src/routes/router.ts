/** @format */

import express from 'express';

const router = express.Router();

// Users routes

import user from '@routes/userRoutes';

router.use(user);

export default router;
