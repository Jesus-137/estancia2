import { Request, Response } from "express";
import { GetByIdUseCase } from "../../application/GetByIdUseCase";

export class GetByIdController{
    constructor (readonly getByIdUseCase: GetByIdUseCase){}

    async run (req: Request, res:Response){
        const id: number = parseInt(req.params.id);
        try {
            const material = await this.getByIdUseCase.run(id);
            if (material){
                res.status(200).send({
                    status:"success",
                    data: {
                        id: material.id,
                        nombre: material.nombre,
                        id_cita: material.id_cita
                    }
                })
            }else{
                res.status(400).send({
                    status: "error",
                    msn: "Verificar dato enviado"
                })
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Hubo un error",
                msn: error
            });
        }
    }
}