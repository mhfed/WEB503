import express from "express";
import { create, get, list, remove, update } from "../controllers/product";
import { checkAuth } from "../middleware/checkAuth";
const router = express.Router();

router.get("/products", list);
router.get("/product/:id", get);
router.post("/products", create);
router.delete("/product/:id", remove);
router.put("/product/:id", update);

export default router;
