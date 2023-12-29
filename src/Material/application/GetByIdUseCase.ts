import { Modelo } from "../domain/Modelo";
import { Repository } from "../domain/Repository";

export class GetByIdUseCase{
    constructor (readonly repo: Repository){};

    async run (id: number): Promise<Modelo | null>{
        try {
            const result = await this.repo.getById(id)
            return result;
        } catch (error) {
            return null;
        }
    }
}