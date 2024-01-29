import { Request, Response } from "express";
import { CreatePaisService } from "../../application/services/createPais.service";

export class CreatePaisController {
  constructor(private readonly createPaisService: CreatePaisService) {}

  async run(req: Request, res: Response) {
    const pais = await this.createPaisService.run(req.body);
    res.status(201).json(pais);
  }
}