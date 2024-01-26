import { Pais, PaisResponse } from "../../domin/entities/index.entities";
import { PaisRepository } from "../../domin/repository/paise.repository";
import { validatePais } from "../../domin/validations/pais.validator";

export class CreatePaisService {
    constructor(private readonly paisRepository: PaisRepository) { }
    async run(pais: Pais): Promise<PaisResponse> {
        try {
            const resultValidation = validatePais(pais);
            if (resultValidation.success) {
                const response = await this.paisRepository.createPais(resultValidation.data);
                return response;
            }
            //Se añade valor de validacion, por lo que no sera string
            throw new Error(resultValidation.error.message);
        } catch (err: any) {
            console.log(err);
            throw new Error(err);
        }
    }
}