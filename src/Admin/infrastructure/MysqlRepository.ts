import { query } from "../../database/mysql";
import { Modelo } from "../domain/Modelo";
import { Repository } from "../domain/Repository";

export class MysqlDesviacionRepository implements Repository {
  async login(nombre: string, password: string): Promise<Modelo | null> {
    const sql = "SELECT * FROM admins WHERE correo=? and password=?";
    const params: any[]=[nombre, password];
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
    const sql = "SELECT * FROM admins";
    try {
      const [dat]: any = await query(sql, []);
      const datas = Object.values(JSON.parse(JSON.stringify(dat)));
      return datas.map(
        (data: any) =>
          new Modelo(
            data.id,
            data.correo,
            data.password
          )
      );
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
