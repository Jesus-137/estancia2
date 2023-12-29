import { MysqlRepository } from "./MysqlRepository";
import { CreateUseCase } from "../application/CreateUseCase";
import { GetAllUseCase } from "../application/GetAllUseCase";
import { LoginUseCase } from "../application/LoginUseCase";
import { RecoverPasswordUseCase } from "../application/RecoverPasswordUseCase";
import { CreateController } from "./controllers/CreateController";
import { GetAllController } from "./controllers/GetAllController";
import { LoginController } from "./controllers/LoginController";
import { RecoverPasswordController } from "./controllers/RecoverPasswordControler";

export const mysqlRepository = new MysqlRepository();
export const createUseCase = new CreateUseCase(
  mysqlRepository
);
export const getAllUseCase = new GetAllUseCase(
  mysqlRepository
);
export const loginUseCase = new LoginUseCase(
  mysqlRepository
);
export const recoverPasswordUseCase = new RecoverPasswordUseCase(
  mysqlRepository
)
export const createController = new CreateController(
  createUseCase
);
export const getAllController = new GetAllController(
  getAllUseCase
);
export const loginController = new LoginController(
  loginUseCase
);
export const recoverPasswordControler = new RecoverPasswordController(
  recoverPasswordUseCase
);