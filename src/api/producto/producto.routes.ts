import { Router } from "express";

// controllers
import * as CtrlProducto from "./producto.controller";

const router = Router();
router.get("/list", CtrlProducto.getAllProductos);
router.put("/updated/:id", CtrlProducto.getUpdatedProducto);
router.delete("/remove/:id", CtrlProducto.getDeleteProducto);
router.post("/upload-pro", CtrlProducto.upload, CtrlProducto.productoCreateUpload);

export default router;
