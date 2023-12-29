import express from "express";

import { createController } from "./dependencies";
import { getAllController } from "./dependencies";

export const candeRouter = express.Router();

candeRouter.post(
  "/getAll/",
  getAllController.run.bind(getAllController)
);
candeRouter.post(
  "/crear/",
  createController.run.bind(createController)
);