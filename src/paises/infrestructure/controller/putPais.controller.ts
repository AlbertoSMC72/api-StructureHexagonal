import { Request, Response } from "express";
import { ModificarPaisService } from "../../application/services/modificarPais.service";

export class PutPaisController {
    constructor(private readonly putPaisService: ModificarPaisService) {}
    async run(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const parseId = parseInt(id);
        const pais = req.body;
        const result = await this.putPaisService.run(pais, parseId);
        res.status(200).send(result);
      } catch (err: any) {
        return res.status(500).send(err.message);
      }
    }
  }