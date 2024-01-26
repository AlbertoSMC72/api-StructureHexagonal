export interface Pais {
    id?:number;
    nombre: string;
    codigo_iso: string;
    capital: string;
    poblacion?: number;
    idioma_principal: string;
    continente_id?: number;
}
