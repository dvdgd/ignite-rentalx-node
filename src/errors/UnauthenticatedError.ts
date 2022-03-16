import { CustomAPIError } from "./CustomAPIError";

class UnauthenticatedError extends CustomAPIError {
  constructor(message: string) {
    super(message, 401);
  }
}

export { UnauthenticatedError };
