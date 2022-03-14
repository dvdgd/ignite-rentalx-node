import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const authenticateUserCase = container.resolve(AuthenticateUserUseCase);
    const { email, password } = req.body;

    const token = await authenticateUserCase.execute({ email, password });
    return res.json(token);
  }
}

export { AuthenticateUserController };
