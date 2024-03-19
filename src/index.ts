import express, { Request, RequestHandler, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { env_entorno } from "./env";
import productoRoutes from "./api/producto/producto.routes";
import usuarioRoutes from "./api/usuario/usuario.routes";

//server app
const app = express();

const port = env_entorno.PORT;
app.listen(port, () => {
  console.log(`🔥  🚀  server runn port ➡️ ... ${port} 😃  ✔️`);
});

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// static files
app.use(express.static("upload"));



app.use('/producto', productoRoutes)
app.use('/usuario', usuarioRoutes)



