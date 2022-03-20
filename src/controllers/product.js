
import Product from "../models/Product";
import slugify from 'slugify';

//get list products
export const list = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(404).json({ message: "Lỗi không tìm được sản phẩm!" });
    }
};
//get a product
export const get = async (req, res) => {
    const filter = { _id: req.params.id }
    try {
        const product = await Product.findOne(filter);
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
};
//create product
export const create = async (req, res) => {
    req.body.slug = slugify(req.body.name);
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm thất bại"
        })
    }
};
//delete product
export const remove = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const product = await Product.findByIdAndDelete(condition);
        res.json({
            message: "Đã xóa thành công",
            data: product
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
};
//update product
export const update = async (req, res) => {
    const condition = { _id: req.params.id };
    const doc = req.body;
    const option = { new: true };
    try {
        const product = await Product.findOneAndUpdate(condition, doc, option);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
};
