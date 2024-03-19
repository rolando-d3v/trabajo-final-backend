import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";


const prisma = new PrismaClient();


//? CREATE ONE USER
//? ******************************************************************************************************************/
export const createUser = async (req: Request, res: Response) => {
  try {

    const { DNI, CORREO, PASSWORD, AP_MATERNO, AP_PATERNO, NOMBRE} = req.body

    const user_create = await prisma.usuario.create({
      data: {
        ID_DNI_C: DNI,
        CORREO_V: CORREO,
        PASSWORD_V: await bcrypt.hash(PASSWORD, 10),
        AP_MATERNO_V: AP_MATERNO,
        AP_PATERNO_V: AP_PATERNO,
        NOMBRE_V: NOMBRE
      },
    });
    console.log(user_create);

    return res.json({ msn: "Registro success 2023 😃 ✔️" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};



//? GET ALL USERS
//? ******************************************************************************************************************/
export const getAllUsuarios = async (req: Request, res: Response) => {
  try {

    const list_user = await prisma.usuario.findMany({});

    return res.json({ msn: "lista usuarios", list_user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};


