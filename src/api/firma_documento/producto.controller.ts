import { Request, Response } from "express";
import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import short from 'short-uuid'
import dayjs from "dayjs";

const prisma = new PrismaClient();



var storageOne = multer.diskStorage({
  destination: "Data",

  filename: async function (req, file, cb) {
    const fecha = dayjs().format("YYYY-MM-DD");
    let url_doc = fecha + "--" + short.generate() + "--" + "firmado digital" + '[R].pdf';
  
    cb(null, url_doc);
  },
});



export const upload = multer({
  storage: storageOne,
}).any();


//?  RECIBE Y DESCARGA EL DOC FIRMANDO
//? ****************************************************************************************************************/
export const firmaFileUpload = async (req: Request, res: Response) => {
  try {


    req.body.thumbnails = req.files;
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

    const FileNumber = Rfile[0].fieldname
    const FileNamex = Rfile[0].filename

    console.log(Rfile[0].fieldname);
    console.log(Rfile[0].filename);
    console.log(Rfile[0].originalname);


    //  const firmadoDoc = await prisma.documento.update({
    //   where: {
    //     ID_DOCUMENTO_I: Number(FileNumber)
    //   },
    //   data: {
    //     URL_DOC_T: FileNamex
    //   }
    //  })


    // return res.json({ msn: "File Firmado success 😃 ✔️", firmadoDoc });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};



//? ENVIA LOS ARGUMENTOS PARA FIRMA  faltaaaaxxxxxxxxxxx
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

