import express from "express";

import { getAllController } from "./dependencies";
import { createController } from "./dependencies";

export const citaRouter = express.Router();

citaRouter.get(
  "/getAll/",
  getAllController.run.bind(getAllController)
);
citaRouter.post(
  "/crear/",
  createController.run.bind(createController)
);