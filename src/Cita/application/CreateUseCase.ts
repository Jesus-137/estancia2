import { Modelo } from "../domain/Modelo";
import { Repository } from "../domain/Repository";

export class CreateUseCase {
  constructor(readonly repo: Repository) {}

  async run(
    nombre: string,
    tipo_local: string,
    medidas: string,
    nplanta: number,
    id_cliente: number
  ): Promise<Modelo | null> {
    try {
      const user = await this.repo.create(
        nombre,
        tipo_local,
        medidas,
        nplanta,
        id_cliente
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
