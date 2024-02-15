import bcrypt from "bcrypt"
import { BCRYPT_SALTOS } from "../../domain/constants/index.constans";

export const createContrasenaHash = (contrasena: string): string => {
    console.log(BCRYPT_SALTOS)
    console.log(contrasena)
  return bcrypt.hashSync(contrasena, BCRYPT_SALTOS);
}