import { Category } from "@modules/cars/infra/typeorm/entities/Category";

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async get(): Promise<Category[]> {
    const allCategories = this.categories;
    return allCategories;
  }

  async findByName(name: string): Promise<Category> {
    const categoryByName = this.categories.find(
      (category) => category.name === name
    );
    return categoryByName;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const newCategory = new Category();

    Object.assign(newCategory, {
      name,
      description,
    });

    this.categories.push(newCategory);
  }
}

export { CategoriesRepositoryInMemory };
