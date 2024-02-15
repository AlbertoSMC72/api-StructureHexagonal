import { Request, Response } from "express";
import { GetPaisesByNameService } from "../../application/services/getPaisName.service";

export class GetPaisesByNameController {
    constructor(private readonly getPaisesByNameService: GetPaisesByNameService) { }

    async run(req: Request, res: Response) {
        try {
            const { nombre } = req.params;
            const pais = await this.getPaisesByNameService.run(nombre);
            if (!pais) {
                return res.status(404).json({ message: 'Pais no encontrado' });
            }
            res.status(200).json(pais);
        } catch (err: any) {
            return res.status(500).send(err.message);
        }
    }
}