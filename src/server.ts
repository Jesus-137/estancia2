import { Signale } from "signale";
import express from "express";
import { adminRouter } from "./Admin/infrastructure/Router";
import { candeRouter } from "./Calendelario/infrastructure/Router";
import { citaRouter } from "./Cita/infrastructure/Router";
import { clientRouter } from "./Cliente/infrastructure/Router";
import { matRouters } from "./Material/infrastructure/Routers";
import cors from 'cors';

const app = express();
const signale = new Signale();
app.use(express.json());
app.use(cors());
app.use("/cliente", clientRouter);
app.use("/cita", citaRouter);
app.use("/calendario", candeRouter);
app.use("/admin", adminRouter);
app.use("/material", matRouters);

const port = 3003;
const host = '0.0.0.0';

app.listen(port, host, () => {
  signale.success("Server online in port 3003");
});
