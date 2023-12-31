import userRoute from "./user.routes.js";
import productRoute from "./product.routes.js";
import { Router } from "express";

const router = Router();

router.use("/user", userRoute);
router.use("/product", productRoute);

export default router;
