import { Modelo } from "../domain/Modelo";
import { Repository } from "../domain/Repository";

export class CreateUseCase {
  constructor(readonly repo: Repository) {}

  async run(
    nombre: string,
    correo: string,
    password: string,
    telefono: string
  ): Promise<Modelo | null> {
    try {
      const cliente = await this.repo.create(
        nombre,
        correo,
        password,
        telefono
      );
      return cliente;
    } catch (error) {
      return null;
    }
  }
}
