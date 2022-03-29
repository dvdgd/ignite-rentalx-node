import { Request, Response } from "express";

function routeNotFound(req: Request, res: Response) {
  res.status(404).json({ error: "Route does not exist" });
}

export { routeNotFound };
