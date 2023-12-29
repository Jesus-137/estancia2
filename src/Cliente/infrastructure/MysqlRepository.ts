import { query } from "../../database/mysql";
import { Modelo } from "../domain/Modelo";
import { Repository } from "../domain/Repository";

export class MysqlRepository implements Repository {
  async login(correo: string, password: string): Promise<Modelo | null> {
    const sql = "SELECT * FROM clientes WHERE correo=? and password=?";
    const params: any[]=[correo, password];
    try {
      const result: any= await query(sql, params);
      const user = result[0][0];
      console.log(user)
      return user;
    } catch (error) {
      return null;
    }
  }
  async getAll(): Promise<Modelo[] | null> {
    const sql = "SELECT * FROM clientes";
    try {
      const [dat]: any = await query(sql, []);
      const datas = Object.values(JSON.parse(JSON.stringify(dat)));
      return datas.map(
        (data: any) =>
          new Modelo(
            data.id,
            data.nombre,
            data.correo,
            data.password,
            data.telefono
          )
      );
    } catch (error) {
      return null;
    }
  }

  async create(
    nombre: string,
    correo: string,
    password: string,
    telefono: string
  ): Promise<Modelo | null> {
    const sql = "INSERT INTO clientes (nombre, correo, password, telefono) VALUES (?, ?, ?, ?)";
    const params: any[] = [nombre, correo, password, telefono];
    try {
      const [result]: any = await query(sql, params);
      return new Modelo(result.insertId, nombre, correo, password, telefono);
    } catch (error) {
      return null;
    }
  }
  async recoverPass(newPass: string, id : number): Promise<any | null> {
    const sql = "UPDATE admins SET password = ? where id = ?";
    const params = [newPass, id]
    try {
      let [update]: any = await query (sql, params);
      return update;
    } catch (error) {
      return null
    }
  }
}
