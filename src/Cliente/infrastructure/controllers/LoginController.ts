import { Request, Response } from "express";
import { LoginUseCase } from "../../application/LoginUseCase";
import jwt from 'jsonwebtoken';

export class LoginController {
  constructor(readonly loginUseCase: LoginUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body
    try {
        const admin = await this.loginUseCase.run(
            data.correo,
            data.password
        );
        if (admin){
            const correo = admin.correo
            const token = jwt.sign({ correo }, 'Cliente', { expiresIn: '1h' });
            res.status(200).send({
              status: "ok",
              token: token,
              msn: "Correo y contraceña corectos",
            });
        }
        else
            res.status(400).send({
                status: "error",
                token: '',
                msn: "Correo o contraceña incorectos",
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
