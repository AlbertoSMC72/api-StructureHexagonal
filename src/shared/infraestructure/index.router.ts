import { Router, Request, Response } from "express";

import paisRouter from "../../paises/infrestructure/pais.router";
import userRouter from "../../user/infraestructure/user.router";
import authRouter from "../../auth/infraestructure/auth.router";


const prefijo = "/api";
const indexRouter = Router();

indexRouter.use(`${prefijo}/paises`, paisRouter);
indexRouter.use(`${prefijo}/usuarios`, userRouter);
indexRouter.use(`${prefijo}/auth`, authRouter);


indexRouter.get(prefijo, (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

export default indexRouter;
