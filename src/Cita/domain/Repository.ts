import { Modelo } from "./Modelo";

export interface Repository {
  getAll(): Promise<Modelo[] | null>;
  create(
    nombre: string,
    tipo_local: string,
    medidas: string,
    nplanta: number,
    id_cliente: number
  ): Promise <Modelo | null>
}
