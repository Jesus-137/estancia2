import { query } from "../../database/mysql";
import { Modelo } from "../domain/Modelo";
import { Repository } from "../domain/Repository";

export class MysqlRepository implements Repository {
  async getAll(): Promise<Modelo[] | null> {
    const sql = "SELECT * FROM citas";
    try {
      const [dat]: any = await query(sql, []);
      const datas = Object.values(JSON.parse(JSON.stringify(dat)));
      return datas.map(
        (data: any) =>
          new Modelo(
            data.id,
            data.nombre,
            data.tipo_local,
            data.medidas,
            data.nplanta,
            data.id_cliente
          )
      );
    } catch (error) {
      return null;
    }
  }

  async create(
    nombre: string,
    tipo_local: string,
    medidas: string,
    nplanta: number,
    id_cliente:number
  ): Promise<Modelo | null> {
    const sql = "INSERT INTO citas (nombre, tipo_local, medidas, nplanta, id_cliente) VALUES (?, ?, ?, ?, ?)";
    const params: any[] = [nombre, tipo_local, medidas, nplanta, id_cliente];
    try {
      const [result]: any = await query(sql, params);
      return new Modelo (result.insertId, nombre, tipo_local, medidas, nplanta, id_cliente);
    } catch (error) {
      return null
    }
  }
}
