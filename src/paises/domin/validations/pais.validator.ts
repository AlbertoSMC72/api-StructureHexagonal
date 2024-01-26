import z from "zod"
import { Pais } from "../entities/index.entities"

const paisSchema = z.object({
    id: z.number({
            invalid_type_error: "idPais must be a string",
    }).optional(),
    nombre: z.string({
        invalid_type_error: "nombre must be a string",
        required_error: "nombre is required",
    }),
    codigo_iso: z.string({
        invalid_type_error: "codigo must be a string",
        required_error: "codigo is required",
    }),
    capital: z.string({
        invalid_type_error: "capital must be a string",
        required_error: "capital is required",
    }),
    poblacion: z.number({
        invalid_type_error: "poblacion must be a number",
        required_error: "poblacion is required",
    }).optional(),
    idioma_principal: z.string({
        invalid_type_error: "idioma must be a string",
        required_error: "idioma is required",
    }),
    continente_id: z.number({
        invalid_type_error: "continente_id must be a number",
        required_error: "continente_id is required",
    })
})

export const validatePais = (pais: Pais) => {
    return paisSchema.safeParse(pais)
}

export const validatePartialPais = (pais: Pais) => {
    return paisSchema.partial().safeParse(pais)
}