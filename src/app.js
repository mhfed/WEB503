import express from 'express';
import productRouter from './routes/product';
const app = express();
// Middleware
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("<h1>Home Page</h1>");
});
// Routing
app.use("/api", productRouter);

// Connect
const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`App đang chạy cổng 3001 ${PORT}`);
})