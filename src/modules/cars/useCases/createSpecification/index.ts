import { SpecificationsRepository } from "../../repositories/implementations/SpecificiationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController.";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specifcationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specifcationsRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
