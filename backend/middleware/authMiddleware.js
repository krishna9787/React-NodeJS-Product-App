import { validateJSONToken } from "../util/auth.js";

export default function authMiddleware(req,res,next) {

    if (!req.headers.authorization) {
      res.status(401).json({message: 'Auth Header missing'})
    }
    console.log("Auth: ",req.headers.authorization)
    const authFragment = req.headers.authorization.split(' ')
    if (authFragment.length !== 2) {
      res.status(401).json({message: 'Auth Header Invalid'})
    }

    const token = authFragment[1]
  try { 
  if (!token) return res.status(401).json({message: "Access Denied"});
    const decoded = validateJSONToken(token)
    if (req.email = decoded.email) {
      next();
    } else {
      res.status(401).json({message: 'Invalid token'})
    }
  } catch(error) {
    res.status(401).json({message: 'Invalid token'})
  }
}