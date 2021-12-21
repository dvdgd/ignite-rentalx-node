import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private categoriesUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response) {
    const allCategories = this.categoriesUseCase.execute();
    res.json(allCategories);
  }
}

export { ListCategoriesController };
