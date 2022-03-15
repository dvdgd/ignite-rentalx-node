import { NextFunction, Request, Response } from "express";
import { verify as jwtVerify } from "jsonwebtoken";

import { NotFoundError } from "../error/NotFoundError";
import { UnauthenticatedError } from "../error/UnauthenticatedError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new UnauthenticatedError(
      "Missing token. Please, provide an authorization header and try again"
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const { sub: user_id } = jwtVerify(token, "token") as IPayload;

    const usersRepository = new UsersRepository();

    const userExists = await usersRepository.findById(user_id);

    if (!userExists) {
      throw new NotFoundError("User not found");
    }

    next();
  } catch {
    throw new UnauthenticatedError(
      "Please, provide an valid token and try again"
    );
  }
}

export { ensureAuthenticated };
