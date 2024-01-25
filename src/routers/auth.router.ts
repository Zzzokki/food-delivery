import { Router } from "express";
import { login, signUp } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/login", login).post("/signup", signUp);

export default authRouter;
