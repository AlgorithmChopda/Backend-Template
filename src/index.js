import express, { Router } from "express";
import { envConfig } from "./config/env.js";
import routes from "./routes/index.js";

const router = Router();

router.use("/api", routes);

const app = express();
app.listen(envConfig.PORT, () => {
  console.log("Server started at PORT :", envConfig.PORT);
});
