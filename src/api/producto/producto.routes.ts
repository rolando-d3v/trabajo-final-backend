import { Router } from "express";

// controllers
import * as CtrlProducto from "./producto.controller";
import { authorization } from "../auth/auth.controller";

const router = Router();
router.get("/list", [authorization],  CtrlProducto.getAllProductos);
router.put("/updated/:id", CtrlProducto.getUpdatedProducto);
router.delete("/remove/:id", CtrlProducto.getDeleteProducto);
router.post("/upload-pro", CtrlProducto.upload, CtrlProducto.productoCreateUpload);

export default router;
