import { Request, Response } from "express";
import { GetAllUseCase } from "../../application/GetAllUseCase";

export class GetAllController{
    constructor(
        readonly getAllUseCase: GetAllUseCase
    ){}

    async run(req: Request, res: Response){
        try {
            const materiales = await this.getAllUseCase.run();
            if (materiales){
                res.status(201).send(materiales.map((material:any)=>{
                    return {
                        id: material.id,
                        modelo: material.nombre,
                        id_cita: material.id_cita
                    };
                }));
            }
            else
                res.status(400).send({
                    status: "error",
                    msn: "Ocurio un problema"
                });
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ocurio un error",
                msn: error
            })
        }
    }
}