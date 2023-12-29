import { Request, Response } from "express";
import { GetAllUseCase } from "../../application/GetAllUseCase";
import jwt from "jsonwebtoken";

export class GetAllController {
  constructor(readonly getAllUseCase: GetAllUseCase) {}

  async run(req: Request, res: Response) {
    const token = req.headers["authorization"];
    try {
      if (!token){
        return res.status(403).json({msn: "Nesecita token"});
      }else{
        const valido: any = jwt.verify(token, "Admin", (err)=>{
          if (err){
            return false;
          }else{
            return true;
          }
        });
        if (valido){
          const citas = await this.getAllUseCase.run();
          if (citas)
            res.status(200).send(citas.map((cita: any) => {
                return {
                  id: cita.id,
                  nombre: cita.nombre,
                  fecha_inicio: cita.tipo_local,
                  fecha_fin: cita.medidas,
                  estatus: cita.nplanta
                };
              }),
            );
          else
            res.status(400).send({
              status: "error",
              msn: "Ocurrio algún problema",
            });
        }else{
          return res.status(401).json({msn: "Token no valido"});
        }
      }
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
