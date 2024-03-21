import { Request, Response } from "express";

import jwt from "jsonwebtoken";
// import { v4 as uuidv4 } from "uuid";
import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import { env_entorno } from "../../env";

const prisma = new PrismaClient();



//? AUTH AD DOMINIO
//? ***********************************************************************************************/
export const authLoginUser = async (req: Request, res: Response) => {
  try {

    const dni = req.body.dni;
    const password = req.body.password;




    if (!dni || !password) {
      return res
        .status(500)
        .json({
          msj: "Error: Campos requeridos DNI Y PASSWORD 😕 ❗️",
        });
    }



    const token = jwt.sign(
      { uuid: dni, ok: true },
      env_entorno.SECRET_TOKEN,
      {
        expiresIn: "15h",
      }
    );

    return res.json({
      msj: "Login successfully 😃 ✔️",
      token,

    })


  } catch (err) {
    console.log(err);
    return res.status(500).json({ msj: "Error: server 😕 ❗️❗️", err });
  }
};




//? AUTH MANTIENE LOGIN
//? ***********************************************************************************************/
export const postAuthLogin = async (req: Request, res: Response) => {
  try {
    //si existe el token
    const existeToken = req.header("Authorization");
    if (!existeToken) {
      res
        .status(505)
        .json({ ok: false, message: "Acceso denegado: por falta de token" });
    } else {
      jwt.verify(existeToken, env_entorno?.SECRET_TOKEN, (err, userToken) => {
        if (err) {
          return res
            .status(500)
            .json({ msj: "Error: Authentication failed! 😕 ❗️❗️" });
        } else {
          return res.json({
            msj: "Login successfully 😃 ✔️",
            uuid: userToken,
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msj: "Error: server 😕 ❗️❗️", err });
  }
};


