import db from "../config/database.js"

function handleCreateUser(firstName, lastName, email, password) {
  const sql = "INSERT INTO users (firstname, lastname, email, password) VALUES (?,?,?,?);"
  db.run(sql, [firstName, lastName, email, password], (err) => {
    if (err) console.error(err.message)
  })
}

function handleDeleteUser(email) {
  const sql = "DELETE FROM users WHERE email=?"
  db.run(sql, [email], (err) => {
    if (err) console.error(err.message)
  })
}

export {handleCreateUser, handleDeleteUser}