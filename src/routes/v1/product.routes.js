import { Router } from "express";
import { productController } from "../../controller";

const router = Router();

router.get("/login", productController.add);

export default router;
