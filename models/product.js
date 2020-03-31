"use strict";

const moongose = require("mongoose");
const Schema = moongose.Schema;

const ProductSchema = Schema({
  name: String,
  picture: String,
  price: { type: Number, default: 0 },
  category: { type: String, enum: ["computers", "phones", "accesories"] },
  description: String
});

module.exports = moongose.model("Product", ProductSchema);
