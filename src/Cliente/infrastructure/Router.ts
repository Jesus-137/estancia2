import express from "express";

import { createController, loginController, getAllController, recoverPasswordControler } from "./dependencies";

export const clientRouter = express.Router();

clientRouter.get(
  "/getAll",
  getAllController.run.bind(getAllController)
);
clientRouter.post(
  "/crear",
  createController.run.bind(createController)
);
clientRouter.post(
  "/login/",
  loginController.run.bind(loginController)
);
clientRouter.put(
  "/update/",
  recoverPasswordControler.run.bind(recoverPasswordControler)
);