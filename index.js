"use strict";

const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config.js");

mongoose.connect(config.db, { useNewUrlParser: true }, (err, res) => {
  if (err) {
    console.log("Error alc onectar a la base de datos");
  }

  console.log("Conexión a bdd mongo establecida");

  //Creación de servidor una vez que se estableción la conexión a la bdd
  app.listen(config.port, () => {
    console.log(`API REST en HTTP en http://localhost:${config.port}`);
  });
});
