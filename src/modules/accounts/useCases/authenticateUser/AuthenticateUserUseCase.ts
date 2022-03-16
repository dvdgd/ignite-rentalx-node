import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { UnauthenticatedError } from "../../../../errors/UnauthenticatedError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new UnauthenticatedError("Email or Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthenticatedError("Email or Password incorrect");
    }
    const token = sign({}, "token", {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}

export { AuthenticateUserUseCase };
