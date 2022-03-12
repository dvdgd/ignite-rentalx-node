import { Request, Response, NextFunction } from "express";

import { CustomAPIError } from "../CustomAPIError";

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  return res.status(500).send("Something went wrong try again later");
}

export { errorHandler };
