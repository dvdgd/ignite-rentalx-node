import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, description } = req.body;

      await this.createCategoryUseCase.execute({ name, description });

      return res.status(201).send();
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

export { CreateCategoryController };
