import express from "express"
import {handleGetAllProducts, handleGetProduct} from "../controller/product.js"
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router()

router.route("/").get(authMiddleware, handleGetAllProducts)
router.route("/:id").get(handleGetProduct)


export default router;