import { Request, Response } from "express";
import { DeletedPaisService } from "../../application/services/deletedPais.service";

export class DeletedPaisController {
    constructor(private readonly deletedPaisService: DeletedPaisService) { }
    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const parseId = parseInt(id);
            const handleError = await this.deletedPaisService.run(parseId);
            if (handleError === true)
                return res.status(200).json("Delete successfully");
            return res.status(404).json("There was an error deleting the task");
        } catch (err: any) {
            return res.status(500).send(err.message);
        }
    }
}