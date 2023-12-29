import { Modelo } from "../domain/Modelo";
import { Repository } from "../domain/Repository";

export class CreateUseCase {
  constructor(readonly repo: Repository) {}

  async run(
    nombre: string,
    fecha_inicio: Date,
    fecha_fin: Date,
    estatus: string
  ): Promise<Modelo | null> {
    try {
      const reaction = await this.repo.create(
        nombre,
        fecha_inicio,
        fecha_fin,
        estatus
      );
      return reaction;
    } catch (error) {
      return null;
    }
  }
}
