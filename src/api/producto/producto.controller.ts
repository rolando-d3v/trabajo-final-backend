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

    // const pepe = {
    //   fieldname: '182',
    //   originalname: 'firmado%5BR%5D.pdf',
    //   encoding: 'binary',
    //   mimetype: 'application/octet-stream',
    //   destination: 'Data',
    //   filename: '70a37cd9-1b54-41ac-a6bc-e82efac52157--[R].pdf',
    //   path: 'Data\\70a37cd9-1b54-41ac-a6bc-e82efac52157--[R].pdf',
    //   size: 416771
    // }

    // const FileNamex = Rfile[0].filename

    console.log(Rfile);

    // console.log(Rfile[0].filename);
    // console.log(Rfile[0].originalname);


    const producto = await prisma.producto.create({
      data: {
        DESCRIPTION_V: description,
        TITLE_V: title,
        URL_FILE_T: Rfile.filename,
        PRECIO_D: parseFloat(precio)
      },
    });


    return res.json({ msn: "Producto created success 😃 ✔️", producto });
    // return res.json({ msn: "Producto created success 😃 ✔️"});
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};



//? ENVIA LOS ARGUMENTOS
//? ******************************************************************************************************************/
export const firmaArgumentos = async (req: Request, res: Response) => {
  try {

    const pepe = req.body

    console.log(pepe);

    // const tipoDoc = await prisma.tipo_documento.create({
    //   data: {
    //     DESC_CORTA_V: req.body.desc_corta,
    //     DESC_LARGA_V: req.body.desc_larga,
    //   },
    // });
    return res.json({ msn: "Registro success 2023 😃 ✔️" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};


//? GET ALL PRODUCTOS
//? ******************************************************************************************************************/
export const getAllProductos = async (req: Request, res: Response) => {
  try {

    const pepe = req.body
    const list_pro = await prisma.producto.findMany({});

    return res.json({ msn: "lista productos", list_pro });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};

