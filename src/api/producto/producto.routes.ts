import { Router } from "express";

// controllers
import * as CtrlProducto from "./producto.controller";

const router = Router();
router.get("/list", CtrlProducto.getAllProductos);
router.post("/upload-pro", CtrlProducto.upload, CtrlProducto.productoCreateUpload);



// router.post("/argumento", CtrlProducto.firmaArgumentos);


export default router;
