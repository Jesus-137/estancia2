import { MysqlDesviacionRepository } from "./MysqlRepository";
import { GetAllUseCase } from "../application/GetAllUseCase";
import { GetAllController } from "./controllers/GetAllController";
import { RecoverPasswordUseCase } from "../application/RecoverPasswordUseCase";
import { RecoverPasswordController } from "./controllers/RecoverPasswordControler";
import { LoginUseCase } from "../application/LoginUseCase";
import { LoginController } from "./controllers/LoginController";

export const mysqlRepository = new MysqlDesviacionRepository();
export const getAllDesviacionUseCase = new GetAllUseCase(
  mysqlRepository
);
export const recoverPasswordUseCase = new RecoverPasswordUseCase(
  mysqlRepository
);
export const getAllController = new GetAllController(
  getAllDesviacionUseCase
);
export const recoverPasswordController = new RecoverPasswordController(
  recoverPasswordUseCase
);
export const loginUseCase = new LoginUseCase(
  mysqlRepository
);
export const loginController = new LoginController(
  loginUseCase
);