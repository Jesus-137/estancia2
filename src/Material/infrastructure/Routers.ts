import express  from "express";

import { createController, getByIdController } from "./dependencies";
import { getAllController } from "./dependencies";

export const matRouters = express.Router();

matRouters.get(
    '/getAll',
    getAllController.run.bind(getAllController)
);
matRouters.post(
    '/crear',
    createController.run.bind(createController)
);
matRouters.get(
    "/:id",
    getByIdController.run.bind(getByIdController)
);