import express from 'express';
import {checkAuth} from '../middleware/checkAuth';
const router = express.Router();

router.get("/products", checkAuth , (req,res)=>{
    const data = [{id:1, name:"Hieu Minh"},{id:2, name:"Hiep J"}];
    res.json(data);
});
router.post("/products", checkAuth , (req,res)=>{
    const data = [{id:1, name:"Hieu Minh"},{id:2, name:"Hiep J"}];
    data.push(req.body)
    res.json(data);
});
module.exports = router;