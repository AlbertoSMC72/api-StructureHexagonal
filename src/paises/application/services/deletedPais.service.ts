import { PaisRepository } from "../../domin/repository/paise.repository";

export class DeletedPaisService {
    constructor(private readonly paisRepository: PaisRepository) { }
    async run(id: number): Promise<boolean> {
        try {
            const response = await this.paisRepository.deletePais(id);
            return response;
        } catch (err: any) {
            console.log(err);
            throw new Error(err);
        }
    }
}