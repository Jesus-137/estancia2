import { MysqlRepository } from "./MysqlReactionsRepository";
import { CreateUseCase } from "../application/CreateUseCase";
import { GetAllUseCase } from "../application/GetAllUseCase";
import { CreateController } from "./controllers/CreateController";
import { GetAllController } from "./controllers/GetAllController";

export const mysqlRepository = new MysqlRepository();
export const createReactionUseCase = new CreateUseCase(
  mysqlRepository
);
export const getAllUseCase = new GetAllUseCase(
  mysqlRepository
);
export const createController = new CreateController(
  createReactionUseCase
);
export const getAllController = new GetAllController(
  getAllUseCase
);