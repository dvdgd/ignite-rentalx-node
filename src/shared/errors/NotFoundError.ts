import { CustomAPIError } from "./CustomAPIError";

class NotFoundError extends CustomAPIError {
  constructor(message: string) {
    super(message, 404);
  }
}

export { NotFoundError };
