import express from "express";
import { login, register, adminLogin } from "../controllers/userController.js";
import { validateLogin, validateRegistration } from "../middleware/validate.js";
const userRouter = express.Router();

userRouter.post('/register',validateRegistration ,register);
userRouter.post('/login',validateLogin,login);
userRouter.post('/admin',adminLogin);

export default userRouter;