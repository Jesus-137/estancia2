import { Modelo } from "../domain/Modelo";
import { Repository } from "../domain/Repository";

export class LoginUseCase {
  constructor(readonly repo: Repository) {}

  async run(
    correo: string,
    password: string
  ): Promise<Modelo | null> {
    try {
      const result = await this.repo.login(
        correo,
        password
      );
      return result;
    } catch (error) {
      return null;
    }
  }
}