import { Request, Response } from "express";
import { CreateUseCase } from "../../application/CreateUseCase";

export class CreateController {
  constructor (
    readonly createUseCase: CreateUseCase
    ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const cliente = await this.createUseCase.run(
        data.nombre,
        data.correo,
        data.password,
        data.telefono
      );
      if (cliente){
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: cliente.id,
            nombre: cliente.nombre,
            correo: cliente.correo,
            password: cliente.password,
            telefono: cliente.telefono
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
