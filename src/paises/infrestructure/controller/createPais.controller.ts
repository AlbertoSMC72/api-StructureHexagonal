import { Request, Response } from "express";
import { CreatePaisService } from "../../application/services/createPais.service";

export class CreatePaisController {
  constructor(private readonly createPaisService: CreatePaisService) {}

  async run(req: Request, res: Response) {
    const { nombre } = req.body;
    const pais = await this.createPaisService.run(nombre);
    res.status(201).json(pais);
  }
}