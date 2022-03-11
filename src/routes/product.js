import express from "express";
import { checkAuth } from "../middleware/checkAuth";
const router = express.Router();

const data = [
    { id: 1, name: "Hieu Minh" },
    { id: 2, name: "Hiep J" },
];
router.get("/products", checkAuth, (req, res) => {
    res.json(data);
});
router.get("/product/:id", (req, res) => {
    const result = data.find((item) => item.id === +req.params.id);
    res.json(result);
});
router.post("/products", checkAuth, (req, res) => {
    data.push(req.body);
    res.json(data);
});
router.delete("/product/:id", (req, res) => {
    const newData = data.filter((item) => item.id !== +req.params.id);
    res.json(newData);
});
router.put("/product/:id", (req, res) => {
    const newData = data.map((item) =>
        item.id === +req.params.id ? res.body : item
    );
    res.json(newData);
});
module.exports = router;
