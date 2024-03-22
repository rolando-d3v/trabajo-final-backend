import { Router } from "express";

// controllers
import * as CtrlAuth from "./auth.controller";


const router = Router();
router.post("/user", CtrlAuth.authLoginUser);
router.post("/login", CtrlAuth.authorization);

export default router;
