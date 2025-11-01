import db from "../config/database.js";

function handleGetAllProducts(req,res) {
  db.all(`SELECT * FROM products`, (err, data) => {
    if (err) {
      return res.status(500).json({message: err.message})
    } 
    return res.status(201).json(data)
  })
}

function handleGetProduct(req,res) {
  const productName = req.params.id
  console.log("Product Name: ", productName.replace(":", ""))
  db.all(`SELECT * FROM products WHERE sub_category LIKE '%' || ? || '%'`, [productName.replace(":", "")], (err,data) => {
    if (err) {
      console.log("Got Error", err.message)
      return res.status(500).json({message: err.message})
    }
    console.log(data)
    return res.status(201).json(data)
  })
}

export {
  handleGetAllProducts,
  handleGetProduct,
}