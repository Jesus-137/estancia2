import { MysqlRepository } from "./MysqlRepository";
import { CreateUseCase } from "../application/CreateUseCase";
import { GetAllUseCase } from "../application/GetAllUseCase";
import { GetByIdUseCase } from "../application/GetByIdUseCase";
import { CreateController } from "./controlers/CreateController";
import { GetAllController } from "./controlers/GetAllController";
import { GetByIdController } from "./controlers/GetByIdController";

export const mysqlRepo = new MysqlRepository();
export const createUseCase = new CreateUseCase(
    mysqlRepo
);
export const getAllUseCase = new GetAllUseCase(
    mysqlRepo
);
export const getByIdUseCase = new GetByIdUseCase(
    mysqlRepo
);
export const createController = new CreateController(
    createUseCase
);
export const getAllController = new GetAllController(
    getAllUseCase
);
export const getByIdController = new GetByIdController(
    getByIdUseCase
);