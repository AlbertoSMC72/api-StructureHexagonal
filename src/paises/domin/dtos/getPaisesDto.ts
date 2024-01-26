import { Pais ,PaisResponse } from "../entities/index.entities";
import { paisPaisID } from "./getPaisID";

export function getPaisesDto(pais : Pais[]):PaisResponse[]{
    const formateoPais:PaisResponse[] = [];
    pais.forEach((pais) => {
        formateoPais.push(paisPaisID(pais));
    });
    return formateoPais;
}