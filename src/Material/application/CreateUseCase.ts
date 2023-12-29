import { Modelo } from "../domain/Modelo";
import { Repository } from "../domain/Repository";

export class CreateUseCase{
    constructor (readonly repo: Repository){}

    async run(
        modelo: string,
        id_cita: number
    ): Promise <Modelo | null>{
        try {
            const rasp= await this.repo.create(
                modelo,
                id_cita
            );
            return rasp;
        } catch (error) {
            return null;
        }
    }
}