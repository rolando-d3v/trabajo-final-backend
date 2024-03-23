import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


//? REGISTRAR COMPRA
//? ******************************************************************************************************************/
export const registrarCompra = async (req: Request, res: Response) => {
  try {

    const { COMPRA_ID_I, PRODUCTO_ID_I } = req.body

    const pro = await prisma.producto.findFirst({
      where: {
        ID_PRODUCTO_I: parseInt(PRODUCTO_ID_I)
      },
    })

    const stock = await prisma.producto.findFirst({
      where: {
        ID_PRODUCTO_I: parseInt(PRODUCTO_ID_I),
        CANTIDAD_STOCK: 0,
      },
    })

    console.log(pro);

    if (!stock === false) {
      return res.status(500).json({ msn: "Error: No tiene stock 😕 ❗️❗️" });
    }

    if (!stock === true) {
      const user_create = await prisma.compra_producto.create({
        data: {
          COMPRA_ID_I: Number(COMPRA_ID_I),
          PRODUCTO_ID_I: Number(pro?.ID_PRODUCTO_I),
          NAME_PRO_V: pro?.TITLE_V ? pro?.TITLE_V : "no tiene nombre",
          PRECIO_COMPRA_D: Number(pro?.PRECIO_D)
        },
      });
      console.log(user_create);

      return res.json({ msn: "Registro success 2023 😃 ✔️" });
    }

  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};


