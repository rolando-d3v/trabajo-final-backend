import { Router } from "express";

// controllers
import * as CtrlCompraPro from "./compra_producto.controller";

const router = Router();
router.post("/create", CtrlCompraPro.createUser);
// router.get("/list-all", CtrlCompraPro.getAllUsuarios);



export default router;
