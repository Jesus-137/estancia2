import { Request, Response } from "express";
import { GetAllUseCase } from "../../application/GetAllUseCase";
import jwt from "jsonwebtoken"

export class GetAllController {
  constructor(readonly getAllUseCase: GetAllUseCase) {}

  async run(req: Request, res: Response) {
    const token = req.headers['authorization'];
    try {
      if (!token){
        return res.status(403).json({ msn: 'No tiene permiso' });
      }
      else{
        const valido: any = jwt.verify(token, 'Admin', (err) => 
          {if (err) {
            return false;
          }else{
            return true;
          }}
        );
        if (valido){
          const datas = await this.getAllUseCase.run();
          if (datas)
            res.status(200).send(datas.map((data: any) => {
                return {
                  id: data.id,
                  nombre: data.nombre,
                  correo: data.correo,
                  password: data.password,
                  telefono: data.telefono
                };
              }),
            );
          else
            res.status(400).send({
              status: "error",
              msn: "Ocurrio algún problema",
            });
        }else {
          res.status(401).json({ error: 'Permiso no valido' })
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
