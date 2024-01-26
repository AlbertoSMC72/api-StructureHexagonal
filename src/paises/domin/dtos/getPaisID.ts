import { Pais ,PaisResponse } from "../entities/index.entities";

export function paisPaisID(pais:Pais):PaisResponse {
    return{
        nombre:pais.nombre || "",
        codigo_iso:pais.codigo_iso||"",
        capital:pais.capital||"",
        poblacion:pais.poblacion|| 0,
        idioma_principal:pais.idioma_principal||"",
    };
}
