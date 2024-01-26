import { Request, Response } from "express";
import { GetPaisesService } from "../../application/services/getAllPaises.service";

export class GetPaisesController {
  constructor(private readonly getPaisesService: GetPaisesService) {}

  async run(req: Request, res: Response) {
    try {
      const paises = await this.getPaisesService.run();
      res.status(200).json(paises);
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}