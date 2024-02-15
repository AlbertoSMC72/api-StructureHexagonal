import { Request, Response } from "express";
import { LoginAuthService } from "../../aplication/service";

export class LoginAuthController {
  constructor(private readonly loginAuthService: LoginAuthService) {}
  async run(req: Request, res: Response) {
    try {
      const userCredentials = req.body;

      // Validar si los campos correo y contrasena existen
      if (!userCredentials.correo || !userCredentials.contrasena) {
        return res.status(400).json({ message: 'correo y contrasena son requeridos' });
      }

      const jwtResult = await this.loginAuthService.run(userCredentials);
      res.status(200).json(jwtResult);
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}