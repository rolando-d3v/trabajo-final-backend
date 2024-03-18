import dotenv from "dotenv";
dotenv.config();

export const env_entorno = {
  PORT: process.env.PORT || 4000,
};
