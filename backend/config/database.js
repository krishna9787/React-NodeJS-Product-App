import sqlite from 'sqlite3'
import dotenv from 'dotenv'


dotenv.config()
sqlite.verbose()


const db = new sqlite.Database (process.env.DATABASE_NAME,sqlite.OPEN_READWRITE, (err) => {
  if (err) console.error(err.message)
  console.log('connected to database')
})

//Create user table
db.run(`CREATE TABLE IF NOT EXISTS users(id INTEGER AUTO INCREMENT, firstname TEXT NOT NULL, lastname TEXT, email TEXT PRIMARY KEY, password TEXT)`, (err) => (err) ? console.error(err.message) : console.log("Create Successful for users"))

db.run(`CREATE TABLE IF NOT EXISTS products(id INTEGER AUTO INCREMENT PRIMARY KEY, name TEXT NOT NULL, description TEXT, category TEXT NOT NULL, a TEXT, quantity INTEGER, rate REAL, image TEXT)`, (err) => (err) ? console.error(err.message): console.log("Create Successful for products"))

db.run(`CREATE TABLE IF NOT EXISTS product_category(id INTEGER AUTO INCREMENT PRIMARY KEY, category TEXT NOT NULL, sub_category TEXT NOT NULL)`, (err) => (err) ? console.error(err.message): console.log("Product Category table created successfully"))

export default db;
