import { Pais } from "../entities/pais";

export interface PaisRepository {
    getPaises(): Promise<Pais[]>;//chear si falla
    getPaisById(id: number): Promise<Pais>;
    getPaisByCodigoIso(codigoIso: string): Promise<Pais>;
    createPais(pais: Pais): Promise<Pais>;
    updatePais(id: number, pais: Pais): Promise<Pais>;
    deletePais(id: number): Promise<boolean>;
}