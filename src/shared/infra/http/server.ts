import "reflect-metadata";
import "express-async-errors";
import express from "express";
import swaggerUi from "swagger-ui-express";

import { errorHandler } from "@shared/infra/http/middlewares/errorHandler";
import { routeNotFound } from "@shared/infra/http/middlewares/routeNotFound";
import { router } from "@shared/infra/http/routes";

import swaggerFile from "../../../swagger.json";
import "@shared/infra/typeorm";
import "@shared/container";

const app = express();

app.use(express.json());
app.use(router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(errorHandler);
app.use(routeNotFound);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
