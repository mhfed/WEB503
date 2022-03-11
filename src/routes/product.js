import express from "express";
import { checkAuth } from "../middleware/checkAuth";
const router = express.Router();

const data = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
];
router.get("/products", checkAuth, (req, res) => {
    res.json(data);
});
router.get("/product/:id", (req, res) => {
    //get a product
    const result = data.find((item) => item.id === +req.params.id);
    res.json(result);
});
router.post("/products", checkAuth, (req, res) => {
    //create product
    data.push(req.body);
    res.json(data);
});
router.delete("/product/:id", (req, res) => {
    //delete product
    const newData = data.filter((item) => item.id !== +req.params.id);
    res.json(newData);
});
router.put("/product/:id", (req, res) => {
    //update product
    const newData = data.map((item) =>
        item.id === +req.params.id ? req.body : item
    );
    res.json(newData);
});
export default router;
