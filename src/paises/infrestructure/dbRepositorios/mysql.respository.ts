import { db } from "../../../shared/application/mysqlConnection";
import { Pais } from "../../domin/entities/pais";
import { PaisRepository } from "../../domin/repository/paise.repository";

export class MysqlPaisRepository implements PaisRepository {
    async getPaises(): Promise<Pais[]> {
        const query = "SELECT * FROM paises";
        const [rows] = await db.execute(query);
        return rows as Pais[];
    }
    async getPaisById(id: number): Promise<Pais> {
        const query = "SELECT * FROM paises WHERE id = ?";
        return db
            .execute(query, [id])
            .then((res: any) => {
                console.log(res);
                return res[0][0] as Pais;
            })
            .catch((err: any) => {
                throw new Error(err);
            });
    }
    async createPais(pais: Pais): Promise<Pais> {
        const query = "INSERT INTO paises (nombre, codigo_iso, capital, poblacion, idioma_principal, continente_id) VALUES (?, ?, ?, ?, ?, ?)";
        await db.execute(query, [pais.nombre, pais.codigo_iso, pais.capital, pais.poblacion, pais.idioma_principal, pais.continente_id]);
        return pais;
    }
    async updatePais(id: number, pais: Pais): Promise<Pais> {
        const query = "UPDATE paises SET nombre =? , codigo_iso=? , capital=? , poblacion=? , idioma_principal=? , continente_id =?  WHERE id = ?";
        await db.execute(query, [pais.nombre, pais.codigo_iso, pais.capital, pais.poblacion, pais.idioma_principal, pais.continente_id, id]);
        return pais;
    }

    async deletePais(id: number): Promise<boolean> {
        const query = "DELETE FROM paises WHERE id = ?";
        await db.execute(query, [id]);
        return true;
    }

    async getPaisByCodigoIso(codigoIso: string): Promise<Pais> {
        const query = "SELECT * FROM paises WHERE codigo_iso = ?";
        return db
            .execute(query, [codigoIso])
            .then((res: any) => {
                console.log(res);
                return res[0][0] as Pais;
            })
            .catch((err: any) => {
                throw new Error(err);
            });
        }

    async getPaisName(nombre: string): Promise<Pais> {
        const query = "SELECT * FROM paises WHERE nombre = ?";
        return db
            .execute(query, [nombre])
            .then((res: any) => {
                console.log(res);
                return res[0][0] as Pais;
            })
            .catch((err: any) => {
                throw new Error(err);
            });
    }
}

