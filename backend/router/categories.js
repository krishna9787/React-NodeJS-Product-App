import express from "express"
import { handleGetAllCategories } from "../controller/categories.js";


const router = express.Router()

router.route("/").get(handleGetAllCategories)

export default router;