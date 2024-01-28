import { PaisResponse, Pais } from "../../domin/entities/index.entities";
import { PaisRepository } from "../../domin/repository/paise.repository";
import { validatePartialPais } from "../../domin/validations/pais.validator";

export class ModificarPaisService {
    constructor(private readonly PaisRepository: PaisRepository) { }
    async run(pais: Pais, id: number): Promise<PaisResponse> {
        try {
            const resultValidation = validatePartialPais(pais);
            if (!resultValidation.success)
                throw new Error(resultValidation.error.message);
            const originalPais = await this.PaisRepository.getPaisById(id);
            if (!(pais.nombre && pais.codigo_iso && pais.capital && pais.poblacion && pais.idioma_principal && pais.continente_id && originalPais))
                throw new Error("Task not found");
            return await this.PaisRepository.updatePais(id, pais);
        } catch (err: any) {
            console.log(err);
            throw new Error(err);
        }
    }
}
