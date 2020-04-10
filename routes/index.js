"use strict";

const express = require("express");
const api = express.Router();
const auth = require("../middlewares/auth");
const ProductController = require("../controllers/product.js");
const userCtrl = require("../controllers/user");

//Obtener productos
api.get("/product", ProductController.getProducts);

//Obtener un único producto
api.get("/product/:productID", ProductController.getProduct);

//Subir producto
api.post("/product", ProductController.saveProduct);

//Actualizar producto
api.put("/product/:productID", ProductController.updateProduct);

api.delete("/product/:productID", ProductController.deleteProduct);
api.post("/signup", userCtrl.signUp);
api.post("/signip", userCtrl.signIn);
api.get("/private", auth, function (req, res) {
  //Cuando se llame esta ruta, lo primero que hace es ejecutar el middleware usAuth

  res.status(200).send({ message: "Tienes acceso" });
});

module.exports = api;
