import { Router } from "express";

// controllers
import * as CtrlProducto from "./producto.controller";

const router = Router();
router.post("/upload", CtrlProducto.upload, CtrlProducto.firmaFileUpload);
router.post("/argumento", CtrlProducto.firmaArgumentos);


export default router;
