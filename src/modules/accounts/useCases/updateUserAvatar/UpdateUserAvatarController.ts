import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id: user_id } = req.user;
    const avatar_file = req.file.filename;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    updateUserAvatarUseCase.execute({ user_id, avatar_file });

    return res.status(204).send();
  }
}

export { UpdateUserAvatarController };
