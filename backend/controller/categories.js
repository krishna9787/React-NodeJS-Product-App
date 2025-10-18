import db from "../config/database.js";

function handleGetAllCategories(req, res) {
  db.all('SELECT DISTINCT(category), subcategory from products', (err, data) => {
    if (err) {
      return res.status(500).json({message: err.message})
    }
    console.log(data)
    return res.status(201).json(data)
  })
}

export {
  handleGetAllCategories,
}