import { handleCreateUser } from "../model/user.js";
import db from "../config/database.js"
import bcrypt from "bcrypt"
import { createJSONToken } from "../util/auth.js";

async function handleLoginUser(req,res) {
  const user = req.body
  console.log("Req body: ",user.email)
  db.get('SELECT * FROM users where email=?', [user.email], (err,data) => {
    if (err) {
      return res.status(500).json({message: err.message})
    } else {
      console.log(data.email + " " + data.password + " " + user.email + " " + user.password)
      const passwordMatch = bcrypt.compare(user.password, data.password)
      if (data.email == user.email && passwordMatch) {
        const tokenValue = createJSONToken(user.email, data.firstname)
        console.log("Token: ", tokenValue)
        return res.status(200).json({token: tokenValue})
      } else {
        // return res.status(401).json({message: "Login fail"})
        console.log("Login fail")
        return res.status(401).json({message: "Login fail"})
      }
    }
  }
  )
}

async function handleSignUpUser(req,res) {
  const user = req.body
  const hashedPassword = await bcrypt.hash(user.password, 10)
  console.log(hashedPassword)
  db.run('INSERT INTO users (firstname, lastname, email, password) VALUES (?,?,?,?)', [user.firstName, user.lastName, user.email, hashedPassword], (err) => (err) ? console.error(err.message) : console.log("Insert Successful"))
}
 
export {handleLoginUser, handleSignUpUser}