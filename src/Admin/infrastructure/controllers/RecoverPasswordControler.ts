import { Request, Response } from "express";
import { RecoverPasswordUseCase } from "../../application/RecoverPasswordUseCase";

export class RecoverPasswordController {
  constructor(
    readonly recoverPassword: RecoverPasswordUseCase
  ) {}

  async run(req : Request, res: Response) {
    const data = req.body
    try {
        const newadmin = await this.recoverPassword.run(data.newPass, data.id);
        if (newadmin)
          res.status(200).send(
            {
              status: 'success', 
              data: "admin actualizado"
            }
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
