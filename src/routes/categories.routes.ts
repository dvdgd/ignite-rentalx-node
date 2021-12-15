import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoute = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoute.post("/", (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    throw new Error("Category already exists");
  }

  categoriesRepository.create({ name, description });

  res.status(201).send();
});

categoriesRoute.get("/", (req, res) => {
  const categories = categoriesRepository.get();
  res.json({ categories });
});

export { categoriesRoute };
