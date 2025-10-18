import verifyToken from "../middleware/authMiddleware.js";
import { Router } from "express";

const router = Router()

router.get('/', verifyToken, (req,res) => {
  res.status(200).json({message: 'Protected routes accessed'})
});

export default router;