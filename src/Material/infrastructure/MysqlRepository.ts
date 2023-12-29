import { query } from "../../database/mysql";
import { Modelo } from "../domain/Modelo";
import { Repository } from "../domain/Repository";

export class MysqlRepository implements Repository{
    async getById(id: number): Promise<Modelo | null> {
        const sql = "SELECT * FROM materiales WHERE id=?";
        const params = [id]
        try {
            const result: any = await query(sql, params);
            const material = result[0][0]
            return new Modelo (
                material.id,
                material.nombre,
                material.id_cita
            );
        } catch (error) {
            return null
        }
    }
    async getAll(): Promise<Modelo[] | null> {
        const sql = "SELECT * FROM materiales"
        try {
            const [dat]: any = await query(sql, []);
            const datas = Object (JSON.parse(JSON.stringify(dat)))
            return datas.map((data: any)=>{
                return new Modelo(
                    data.id,
                    data.nombre,
                    data.id_cita
                )
            });
        } catch (error) {
            return null;
        }
    }
    
    async create(
        modelo: string,
        id_cita: number
    ): Promise<Modelo | null> {
        const sql = "INSERT INTO materiales (nombre, id_cita) VALUES (?, ?)";
        const params: any[] = [modelo, id_cita]
        try {
            const [rasp]: any = await query(sql, params);
            return new Modelo (rasp.insertId, modelo, id_cita);
        } catch (error) {
            return null;
        }
    }
}