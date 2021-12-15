import { Router } from "express";

const categoriesRoute = Router();

categoriesRoute.post("/", (req, res) => {
  res.status(501).json({ error: "Method not implemnted" });
});

categoriesRoute.get("/", (req, res) => {
  res.status(501).json({ error: "Method not implemnted" });
});

export { categoriesRoute };
