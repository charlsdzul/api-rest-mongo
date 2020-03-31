const Producto = require("../models/product");

function getProduct(req, res) {
  let productId = req.params.productID;
  Producto.findById(productId, (err, product) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar petición: ${err}` });
    if (!product)
      return res.status(400).send({ messaje: "El producto no existe" });

    res.status(200).send({ producto: product });
  });
}

function getProducts(req, res) {
  Producto.find({}, (err, products) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar petición: ${err}` });
    if (!products) return res.status(400).send({ messaje: "No hay productos" });

    res.status(200).send({ productos: products });
  });
}

function saveProduct(req, res) {
  console.log("POST /api/product");
  console.log(req.body);

  let product = new Producto(); //modelo de la bdd
  product.name = req.body.name;
  product.picture = req.body.picture;
  product.price = req.body.price;
  product.category = req.body.category;
  product.description = req.body.description;

  product.save((err, productStored) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al guardar producto en bdd: ${err}` });

    res.status(200).send({ product: productStored });
  });
  //Cuerpo de la petición, lo recibido
  //console.log(req.body);
  //Respuesta para cliente
  //res.status(200);
  //res.send({ message: "Producto recibido" });
}

function updateProduct(req, res) {
  //Sí actualiza, pero retorna error. Revisar doc mongo
  //https://www.youtube.com/watch?v=CjOMThGjiMo&list=PLUdlARNXMVkk7E88zOrphPyGdS50Tadlr&index=10
  let productId = req.params.productID;
  let update = req.body;

  Producto.findOneAndUpdate(productId, update, (err, productUpdated) => {
    res.status(500).send({ message: `Error al actualizar producto: ${err}` });

    res.status(200).send({ product: productUpdated });
  });
}

function deleteProduct(req, res) {
  let productId = req.params.productID;

  Producto.findById(productId, (err, product) => {
    if (err)
      res.status(500).send({ message: `Error al eliminar producto: ${err}` });

    product.remove(err => {
      if (err)
        res.status(500).send({ message: `Error al eliminar producto: ${err}` });
      res.status(200).send({ message: "El producto ha sido eliminado" });
    });
  });
}

module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
};
