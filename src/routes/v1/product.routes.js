import { Router } from "express";
import { add } from "../../controller/product.controller.js";

const router = Router();

router.get("/login", add);

export default router;
