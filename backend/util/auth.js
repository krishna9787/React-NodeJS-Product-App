import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

function createJSONToken(email, firstName) {
  return jwt.sign({email: email, fname: firstName}, process.env.SECRET_KEY)
}

function validateJSONToken(token) {
  return jwt.verify(token, process.env.SECRET_KEY)
}

export  {createJSONToken, validateJSONToken}