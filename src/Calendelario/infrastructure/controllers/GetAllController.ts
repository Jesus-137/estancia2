import { Request, Response } from "express";
import { GetAllUseCase } from "../../application/GetAllUseCase";

export class GetAllController {
  constructor(readonly getAllUseCase: GetAllUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const calendarios = await this.getAllUseCase.run();
      if (calendarios)
        res.status(200).send(calendarios.map((calendario: any) => {
            return {
              id: calendario.id,
              nombre: calendario.nombre,
              fecha_inicio: calendario.fecha_inicio,
              fecha_fin: calendario.fecha_fin,
              estatus: calendario.estatus
            };
          }),
        );
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
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
