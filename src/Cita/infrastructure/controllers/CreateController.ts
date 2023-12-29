import { Request, Response } from "express";
import { CreateUseCase } from "../../application/CreateUseCase";

export class CreateController {
  constructor (
    readonly createUseCase: CreateUseCase
    ) {}

  async run(req: Request, res: Response) {
    const data = JSON.parse(JSON.stringify(req.body));
    console.log(typeof(data));
    try {
      const cita = await this.createUseCase.run(
        data.nombre,
        data.tipo_local,
        data.medidas,
        data.nplanta,
        data.id_cliente
      );
      if (cita){
        res.status(201).send({
          status: "success",
          data: {
            id: cita.id,
            nombre: cita.nombre,
            tipo_local: cita.tipo_local,
            medidas: cita.medidas,
            nplanta: cita.nplanta,
            id_cliente: cita.id_cliente
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
