import { PaisRepository } from "../../domin/repository/paise.repository";
import { PaisResponse } from "../../domin/entities/index.entities";
import { paisPaisID } from "../../domin/dtos/index.dtos";

export class GetPaisesByIdService {
  constructor(private readonly PaisRepository: PaisRepository) { }
  async run(taskId: number): Promise<PaisResponse> {
    try {
      const response = await this.PaisRepository.getPaisById(taskId);
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