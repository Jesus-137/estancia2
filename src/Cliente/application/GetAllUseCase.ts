import { Modelo } from "../domain/Modelo";
import { Repository } from "../domain/Repository";

export class GetAllUseCase {
  constructor(readonly repo: Repository) {}

  async run(): Promise<Modelo[] | null> {
    try {
      const result = await this.repo.getAll();
      return result;
    } catch (error) {
      return null;
    }
  }
}