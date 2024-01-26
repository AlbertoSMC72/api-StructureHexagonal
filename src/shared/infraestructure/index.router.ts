import { Router, Request, Response } from "express";

import paisRouter from "../../paises/infrestructure/pais.router";


const prefijo = "/api";
const indexRouter = Router();

indexRouter.use(`${prefijo}/paises`, paisRouter);


indexRouter.get(prefijo, (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

export default indexRouter;
