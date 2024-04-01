const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller.js");

//get all products
router.get("/", productController.getProducts);
//get a single product by id 
router.get("/:id", productController.getProduct);
//create a new product
router.post("/", productController.createProduct);
//update a product by id
router.put("/:id", productController.updateProduct);
//delete a product by id
router.delete("/:id", productController.deleteProduct);
//search products by name
router.get("/name/:name", productController.findProductByName);

module.exports = router;