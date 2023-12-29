import { Request, Response } from "express";
import { GetAllUseCase } from "../../application/GetAllUseCase";

export class GetAllController {
  constructor(
    readonly getAllUseCase: GetAllUseCase
  ) {}

  async run(req: Request, res: Response) {
    try {
        const admins = await this.getAllUseCase.run();
        if (admins)
          res.status(200).send(admins.map((admin: any) => {
                return {
                  id: admin.id,
                  correo: admin.correo,
                  password: admin.password
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
