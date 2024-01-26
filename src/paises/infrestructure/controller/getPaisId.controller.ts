import { Request, Response } from "express";
import { GetPaisesByIdService } from "../../application/services/getPaisId.service";

export class GetPaisesByIdController {
  constructor(private readonly getPaisesByIdService: GetPaisesByIdService) {}

  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const parseId = parseInt(id);
      const pais = await this.getPaisesByIdService.run(parseId);
      res.status(200).json(pais);
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}