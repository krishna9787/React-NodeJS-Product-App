import db from "../config/database.js";

function handleGetAllProducts(req,res) {
  console.log("Inside handle all rpducts")
  db.all(`SELECT * FROM products`, (err, data) => {
    if (err) {
      return res.status(500).json({message: err.message})
    } 
    console.log(data)
    return res.status(201).json(data)
  })
}
export {
  handleGetAllProducts,
}