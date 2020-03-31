"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const api = require("./routes");
//const ProductController = require("./controllers/product.js");

//Middlewares. Todo lo que sea HTTP, pasa por estas capas!
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", api);

/*
//Obtener productos
app.get("/api/product", ProductController.getProducts);

//Obtener un único producto
app.get("/api/product/:productID", ProductController.getProduct);

//Subir producto
app.post("/api/product", ProductController.saveProduct);

//Actualizar producto
app.put("/api/product/:productID", ProductController.updateProduct);

app.delete("/api/product/:productID", ProductController.deleteProduct);
*/

module.exports = app;
