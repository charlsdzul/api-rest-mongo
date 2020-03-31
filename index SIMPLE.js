"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

//Middlewares. Todo lo que sea HTTP, pasa por estas capas!
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Obtener productos
app.get("/api/product", (req, res) => {
  res.send(200, { products: [] });
});

//Obtener un único producto
app.get("/api/product/:productID", (req, res) => {});

//Subir producto
app.post("/api/product", (req, res) => {
  //Cuerpo de la petición, lo recibido
  console.log(req.body);
  //Respuesta para cliente
  res.status(200);
  res.send({ message: "Producto recibido" });
});

//Peticion
app.get("/hola", (req, res) => {
  //Para finalizar la petición, hay que dar respuesta
  res.send({ message: "Hola Charls!" });
  //res.end()//Por si no se quiere responder, respuesta "sin nada"
});

//Peticion con 1 parámetro
app.get("/hola/:name", (req, res) => {
  //Para finalizar la petición, hay que dar respuesta
  res.send({ message: `Hola ${req.params.name}!` });
  //res.end()//Por si no se quiere responder, respuesta "sin nada"
});

//Peticion con 2 parámetros
app.get("/hola/:name/:apellido", (req, res) => {
  //Para finalizar la petición, hay que dar respuesta
  res.send({ message: `Hola ${req.params.name + " " + req.params.apellido}!` });
  //res.end()//Por si no se quiere responder, respuesta "sin nada"
});

//Creación de servidor una vez que se estableción la conexión a la bdd
app.listen(port, () => {
  console.log(`API REST en HTTP en http://localhost:${port}`);
});
