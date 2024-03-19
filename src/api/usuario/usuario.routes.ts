import { Router } from "express";

// controllers
import * as CtrlUsuario from "./usuario.controller";

const router = Router();
router.post("/create", CtrlUsuario.createUser);
router.get("/list-all", CtrlUsuario.getAllUsuarios);
// router.post("/upload", CtrlUsuario.upload, CtrlUsuario.firmaFileUpload);
// router.post("/argumento", CtrlUsuario.firmaArgumentos);


export default router;
