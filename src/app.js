import express from "express";
import productRouter from "./routes/product";
import categoryRouter from "./routes/category";
import userRouter from "./routes/user";
import mongoose from "mongoose";
import cors from 'cors';
const app = express();
// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});
// Routing
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/user", userRouter);

//Connect db
mongoose.connect("mongodb://localhost:27017/WE16306")
    .then(() => {
        console.log("Connect thanh cong");
    });
// Connect
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`App đang chạy cổng ${PORT}`);
});
