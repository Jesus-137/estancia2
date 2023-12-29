import express from "express";

import { getAllController, loginController } from "./dependencies";
import { recoverPasswordController } from "./dependencies";

export const adminRouter = express.Router();

adminRouter.get(
  "/getAll/",
  getAllController.run.bind(getAllController)
);
adminRouter.put(
  "/update/",
  recoverPasswordController.run.bind(recoverPasswordController)
);
adminRouter.post(
  "/login/",
  loginController.run.bind(loginController)
);