import { Modelo } from "./Modelo";

export interface Repository {
  getAll(): Promise<Modelo[] | null>;
  create(
    nombre: string,
    fecha_inicio: Date,
    fecha_fin: Date,
    estatus: string
  ): Promise<Modelo | null>;
}
