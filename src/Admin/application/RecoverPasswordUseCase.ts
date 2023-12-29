import { Repository } from "../domain/Repository";

export class RecoverPasswordUseCase {
    constructor (readonly repo : Repository){};
    async run (newPass : string, id : number) : Promise <any | null>{
        try {
            const result = await this.repo.recoverPass(newPass, id);
            return result;
        } catch (error) {
            return null;
        }
    }
}