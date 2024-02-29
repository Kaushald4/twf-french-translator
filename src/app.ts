import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

import translateRoute from "./routes/translateRoute";
import { setupSwagger } from "./config/config";

const startApp = async () => {
  // middleware
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));

  // setup swagger api doc
  const openAiSpecs = setupSwagger();
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(openAiSpecs));

  // route middleware
  app.use("/api/v1", translateRoute);

  app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
};

startApp();
