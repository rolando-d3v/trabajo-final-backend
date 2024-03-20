import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";


const prisma = new PrismaClient();


//? CREATE ONE USER
//? ******************************************************************************************************************/
export const createUser = async (req: Request, res: Response) => {
  try {

    const { DNI, CORREO, PASSWORD, AP_MATERNO, AP_PATERNO, NOMBRE} = req.body

    const user_create = await prisma.compra_producto.create({
      data: {
        COMPRA_ID_I: 1,
        PRODUCTO_ID_I:4,
        NAME_PRO_V: "d",
        PRECIO_COMPRA_D: 12
      },
    });
    console.log(user_create);

    return res.json({ msn: "Registro success 2023 😃 ✔️" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};



// //? GET ALL USERS
// //? ******************************************************************************************************************/
// export const getAllUsuarios = async (req: Request, res: Response) => {
//   try {

//     const list_user = await prisma.usuario.findMany({});

//     return res.json({ msn: "lista usuarios", list_user });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
//   }
// };


