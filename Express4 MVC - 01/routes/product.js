const express = require("express");
const productControler = require('../controller/product')
const router = express.Router();

router
    .post("/", productControler.createProduct)
    .get("/", productControler.getProducts)
    .get("/:id", productControler.getProduct)
    .put("/:id", productControler.replaceProduct)
    .patch("/:id", productControler.updateProduct)
    .delete("/:id", productControler.deleteProduct)

exports.routes = router;