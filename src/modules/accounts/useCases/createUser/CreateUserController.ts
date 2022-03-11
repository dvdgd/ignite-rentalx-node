import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, driver_license, password } = req.body;
      const createUserUseCase = container.resolve(CreateUserUseCase);

      await createUserUseCase.execute({
        name,
        email,
        driver_license,
        password,
      });

      return res.status(201).send();
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

export { CreateUserController };
