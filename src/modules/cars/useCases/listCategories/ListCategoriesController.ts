import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private categoriesUseCase: ListCategoriesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const allCategories = await this.categoriesUseCase.execute();
    return res.json(allCategories);
  }
}

export { ListCategoriesController };
