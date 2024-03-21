import { Request, Response } from "express";
import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import short from 'short-uuid'
import dayjs from "dayjs";

const prisma = new PrismaClient();



var storageOne = multer.diskStorage({
  destination: "upload",

  filename: async function (req, file, cb) {
    const fecha = dayjs().format("YYYY-MM-DD");
    const partes = file.originalname.split('.');
    const extension = partes[partes.length - 1];
    let url_doc = fecha + "--" + short.generate() + "--" + "image." + extension;

    cb(null, url_doc);
  },
});

export const upload = multer({
  storage: storageOne,
}).single('filex');


//?  RECIBE Y DESCARGA EL DOC FIRMANDO
//? ****************************************************************************************************************/
export const productoCreateUpload = async (req: Request, res: Response) => {
  try {
    const { description, title, precio } = req.body
    req.body.thumbnails = req.file;
    const Rfile = req.body.thumbnails;
    console.log(Rfile);

    const producto = await prisma.producto.create({
      data: {
        DESCRIPTION_V: description,
        TITLE_V: title,
        URL_FILE_T: Rfile.filename,
        PRECIO_D: parseFloat(precio)
      },
    });


    return res.json({ msn: "Producto created success 😃 ✔️", producto });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};





//? GET ALL PRODUCTOS
//? ******************************************************************************************************************/
export const getAllProductos = async (req: Request, res: Response) => {
  try {
    const list_pro = await prisma.producto.findMany({
    });

    return res.json({ msn: "lista productos", list_pro });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};

//? UPDATED A PRODUCTO
//? ******************************************************************************************************************/
export const getUpdatedProducto = async (req: Request, res: Response) => {
  try {
    const { description, title, precio } = req.body

    const idx = req.params.id

    const list_pro = await prisma.producto.update({
      where: { ID_PRODUCTO_I: parseInt(idx) },
      data: {
        DESCRIPTION_V: description,
        TITLE_V: title,
        PRECIO_D: parseFloat(precio)
      },
    });

    return res.json({ msn: "lista productos", list_pro });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};



//? DELETED A PRODUCTO
//? ******************************************************************************************************************/
export const getDeleteProducto = async (req: Request, res: Response) => {
  try {

    const idx = req.params.id

    const list_pro = await prisma.producto.delete({
      where: { ID_PRODUCTO_I: parseInt(idx) },
    });

    return res.json({ msn: "lista productos", list_pro });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};

