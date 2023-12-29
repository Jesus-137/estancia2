import { Modelo } from "./Modelo";

export interface Repository {
  getAll(): Promise<Modelo[] | null>;
  recoverPass(newPass : string, id : number): Promise<any | null>;
  login(
    correo: string,
    password: string
  ): Promise <Modelo | null>;
}
