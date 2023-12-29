import { Request,Response } from "express";
import { CreateUseCase } from "../../application/CreateUseCase";
import jwt from "jsonwebtoken"

export class CreateController{
    constructor(
        readonly createUseCase: CreateUseCase
    ){}

    async run(req: Request, res: Response){
        const data = req.body;
        const token = req.headers["authorization"];
        try {
            if (!token){
                return res.status(403).json({msn: "Necesita un token"});
            }else{
                const valido: any = jwt.verify(token, 'Admin', (err) => 
                {if (err) {
                    return false;
                }else{
                    return true;
                }}
                );
                if (valido){
                    const material = await this.createUseCase.run(
                        data.nombre,
                        data.id_cita
                    );
                    if (material){
                        res.status(201).send({
                            status: "success",
                            tada: {
                                id: material.id,
                                nombre: material.nombre,
                                id_cita: material.id_cita
                            }
                        })
                    }
                    else
                        res.status(204).send({
                        status: "error",
                        data: "NO fue posible agregar el registro",
                        });
                }else{
                    return res.status(401).json({msn: "Token no valido"});
                }
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ocurrio un error",
                msn: error,
            });
        }
    }
}