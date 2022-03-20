import express from "express";
import { create, get, list } from "../controllers/category";
import { checkAuth } from "../middleware/checkAuth";
const router = express.Router();

router.get("/categories", list);
router.get("/category/:slug", get);
router.post("/categories", create);
// router.delete("/product/:id", remove);
// router.put("/product/:id", update);

export default router;
