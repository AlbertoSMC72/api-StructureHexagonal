import { PaisRepository } from "../../domin/repository/paise.repository";
import { PaisResponse } from "../../domin/entities/index.entities";
import { getPaisesDto } from "../../domin/dtos/index.dtos";

export class GetPaisesService {
    constructor(private readonly PaisRepository: PaisRepository) { }
    async run(): Promise<PaisResponse[]> {
        try {
            const response = await this.PaisRepository.getPaises();
            if (response) {
                const formatedResponse = getPaisesDto(response);
                return formatedResponse;
            }
            return response;
        } catch (err: any) {
            console.log(err);
            throw new Error(err);
        }
    }
}
