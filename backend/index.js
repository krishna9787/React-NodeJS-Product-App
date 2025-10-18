import express from "express"
import bodyParser from "body-parser"
import dotenv from 'dotenv';
import userRouter from "./router/auth.js"
import productRouter from "./router/product.js"
import categoriesRouter from "./router/categories.js"
import protectedRouter from "./router/protectedRoutes.js"
import authMiddleware from "./middleware/authMiddleware.js";

dotenv.config()
const app = express();
app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
next();
});


app.use(bodyParser.json())

app.use(userRouter)
app.use("/product", productRouter)
app.use("/categories", categoriesRouter)
app.use("/protected", productRouter)

app.get("/", (req,res) => {
  res.send("Server is ready")
})


app.listen(process.env.PORT, () => {
  console.log("Server started at port ", process.env.PORT)
})