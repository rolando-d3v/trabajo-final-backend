import express, { Request, RequestHandler, Response }  from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";

// import { PrismaClient as PrismaClient2 } from '@prisma/client'
import{z} from "zod";

import morgan from "morgan";
import { env_entorno } from "./env";



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




const prisma = new PrismaClient()






app.get('/red', async  (req : Request, res: Response) => {

  const Validated = z.object({
    nombre : z.string(),
    habilitado : z.boolean(),
  })

   Validated.parse({
    nombre : "fsff",
    habilitado : true,
  })

  type Validated = z.infer<typeof Validated>;

  console.log(Validated);

  // const pepe = await client2.
  const pepe = await prisma.documento.findFirstOrThrow({})
  

} )
