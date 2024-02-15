import { PaisRepository } from "../../domin/repository/paise.repository";
import { PaisResponse } from "../../domin/entities/index.entities";
import { paisPaisID} from "../../domin/dtos/index.dtos";

export class GetPaisesByNameService {
    constructor(private readonly PaisRepository: PaisRepository) { }
    async run(nombre: string): Promise<PaisResponse> {
        try {
            const response = await this.PaisRepository.getPaisName(nombre);
            if (response) {
                console.log(response)
                const formatedResponse = paisPaisID(response); 
                return formatedResponse;
            }
            return {} as PaisResponse;
        } catch (err: any) {
            console.log(err);
            throw new Error(err);
        }
    }
}