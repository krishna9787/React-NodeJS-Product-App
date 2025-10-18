import express from "express"
import {handleLoginUser, handleSignUpUser} from "../controller/auth.js"

const router = express.Router()

router.route("/login").post(handleLoginUser)

router.route("/signup").post(handleSignUpUser)

export default router;