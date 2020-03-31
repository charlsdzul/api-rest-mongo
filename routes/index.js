"use strict";

const express = require("express");
const api = express.Router();
const ProductController = require("../controllers/product.js");

//Obtener productos
api.get("/product", ProductController.getProducts);

//Obtener un único producto
api.get("/product/:productID", ProductController.getProduct);

//Subir producto
api.post("/product", ProductController.saveProduct);

//Actualizar producto
api.put("/product/:productID", ProductController.updateProduct);

api.delete("/product/:productID", ProductController.deleteProduct);

module.exports = api;
