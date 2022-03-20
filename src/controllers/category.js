import Category from '../models/Category';
import Product from '../models/Product';
import slugify from 'slugify';
//create category
export const create = async (req, res) => {
    req.body.slug = slugify(req.body.name);
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Thêm danh muc thất bại"
        })
    }
};
//get list category
export const list = async (req, res) => {
    try {
        const categories = await Category.find().exec();
        res.json(categories);
    } catch (error) {
        res.status(404).json({ message: "Lỗi không tìm được danh mục!" });
    }
};
//get a category
export const get = async (req, res) => {
    try {
        const category = await Category.findOne({ slug: req.params.slug }).exec();
        const products = await Product.find({ category: category }).populate('category').select('-category').exec();
        res.json({
            category, products
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
};

// //delete product
// export const remove = async (req, res) => {
//     const condition = { _id: req.params.id }
//     try {
//         const product = await Product.findByIdAndDelete(condition);
//         res.json({
//             message: "Đã xóa thành công",
//             data: product
//         });
//     } catch (error) {
//         res.status(400).json({
//             message: "Lỗi không tìm được sản phẩm"
//         })
//     }
// };
// //update product
// export const update = async (req, res) => {
//     const condition = { _id: req.params.id };
//     const doc = req.body;
//     const option = { new: true };
//     try {
//         const product = await Product.findOneAndUpdate(condition, doc, option);
//         res.json(product);
//     } catch (error) {
//         res.status(400).json({
//             message: "Lỗi không tìm được sản phẩm"
//         })
//     }
// };