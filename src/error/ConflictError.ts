import { CustomAPIError } from "./CustomAPIError";

class ConflictError extends CustomAPIError {
  constructor(message: string) {
    super(message, 409);
  }
}

export { ConflictError };
