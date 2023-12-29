import { Modelo } from "./Modelo";

export interface Repository{
    getAll(): Promise<Modelo[] | null>;
    getById(id: number): Promise<Modelo | null>;
    create(
        nombre: string,
        id_cita: number
    ): Promise<Modelo | null>
}