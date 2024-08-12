

import express from 'express';
import { userController } from './user.controller';

const router= express.Router();


router.post('/create-guest' , userController.createGuest)


export const userRoutes= router;