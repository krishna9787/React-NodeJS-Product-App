import express from "express"
import {handleGetAllProducts} from "../controller/product.js"
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router()

router.route("/").get(authMiddleware, handleGetAllProducts)


export default router;