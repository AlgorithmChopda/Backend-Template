import express from "express";
import { envConfig } from "./config/env.js";

const app = express();
app.listen(envConfig.PORT, () => {
  console.log("Server started at PORT :", envConfig.PORT);
});
