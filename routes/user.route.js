import express from 'express';
import { deleteUser, getUser, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const userRouter=express.Router();

userRouter.post("/update/:id", verifyToken, updateUser);
userRouter.delete("/delete/:id", verifyToken, deleteUser);
userRouter.get("/:id", verifyToken, getUser);

export default userRouter;