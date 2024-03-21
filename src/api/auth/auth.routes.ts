import { Router } from "express";

// controllers
import * as CtrlAuth from "./auth.controller";


const router = Router();
router.post("/", CtrlAuth.authLoginUser);
router.post("/login", CtrlAuth.postAuthLogin);

export default router;
