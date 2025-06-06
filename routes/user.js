import express from 'express';
import { getAllUsers, getMyProfile, login, logout, register } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();


router.get("/all", getAllUsers);

router.post("/login", login);

router.post("/new", register);

router.get('/logout', isAuthenticated, logout);

router.get('/me', isAuthenticated, getMyProfile);

export default router;