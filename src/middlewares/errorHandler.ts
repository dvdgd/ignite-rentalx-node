import { Request, Response, NextFunction } from "express";

import { CustomAPIError } from "@errors/CustomAPIError";

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

  return res
    .status(500)
    .json({ error: `Something went wrong try again later - ${err.message}` });
}

export { errorHandler };
