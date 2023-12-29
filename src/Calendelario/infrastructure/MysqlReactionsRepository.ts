import { query } from "../../database/mysql";
import { Modelo } from "../domain/Modelo";
import { Repository } from "../domain/Repository";

export class MysqlRepository implements Repository {
  async getAll(): Promise<Modelo[] | null> {
    const sql = "SELECT * FROM calendario";
    try {
      const [dat]: any = await query(sql, []);
      const datas = Object.values(JSON.parse(JSON.stringify(dat)));
      console.log(datas)
      return datas.map(
        (data: any) =>
          new Modelo(
            data.id,
            data.name,
            data.cantidad,
            data.tiempo,
            data.id_expe
          )
      );
    } catch (error) {
      return null;
    }
  }

  async create(
    nombre: string,
    fecha_inicio: Date,
    fecha_fin: Date,
    estatus: string
  ): Promise<Modelo | null> {
    const sql =
"INSERT INTO calendario (nombre, fecha_inicio, fecha_fin, estatus) VALUES (?, ?, ?, ?)";
    const params: any[] = [nombre, fecha_inicio, fecha_fin, estatus];
    try {
      const [result]: any = await query(sql, params);
      return new Modelo(result.insertId, nombre, fecha_inicio, fecha_fin, estatus);
    } catch (error) {
      return null;
    }
  }
}
