import { Request, Response } from "express";
import { CreateUseCase } from "../../application/CreateUseCase";

export class CreateController {
  constructor (
    readonly createUseCase: CreateUseCase
    ) {}

  async run(req: Request, res: Response) {
    const data = JSON.parse(JSON.stringify(req.body));
    try {
      const calendario = await this.createUseCase.run(
        data.nombre,
        data.fecha_inicio,
        data.fecha_fin,
        data.estatus
      );
      if (calendario){
        res.status(201).send({
          status: "success",
          data: {
            id: calendario.id,
            nombre: calendario.nombre,
            fecha_inicio: calendario.fecha_inicio,
            fecha_fin: calendario.fecha_fin,
            estatus: calendario.estatus
          },
        });
        console.log('Registro exitoso')
      }
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
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
