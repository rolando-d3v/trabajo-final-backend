import { Router } from "express";

// controllers
import * as CtrlCompraPro from "./compra_producto.controller";

const router = Router();
router.post("/venta", CtrlCompraPro.registrarCompra);


export default router;
