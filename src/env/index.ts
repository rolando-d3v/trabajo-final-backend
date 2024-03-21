import dotenv from "dotenv";
dotenv.config();

export const env_entorno = {
  SECRET_TOKEN: process.env.SECRET_TOKEN || "@20kkppPOLOÑRol2099@",
  PORT: process.env.PORT || 4000,
};
