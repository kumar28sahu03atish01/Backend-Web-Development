//create server in express;
const express = require("express");
const morgan = require('morgan');//third party middleware
const server = express();
const productRouter = require('./routes/product');
const userRouter = require('./routes/user')

// server.use(morgan('dev'));
// server.use(morgan('default'));
// bodyParser express.json is a application middleware
// server.use(express.json());
// server.use(express.urlencoded()); //used for form data
// server.use(express.static('public'));

server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
server.use('/products',productRouter.routes)
server.use('/user',userRouter.routes)

//Web Api Or Endpoint Rest API API ROOT, base URL,  for post, patch, delete use postman
//MVC Model View Controller

//Create API = POST = /products
//Read GET = /products
//Read GET = /products/:id
//Update PUT = /products/:id
//Update PATCH = /products/:id
//Delete DELETE = /products/:id

//server.chaining concept
// server.post("/products", productControler.createProduct)
//     .get("/products", productControler.getProducts)
//     .get("/products/:id", productControler.getProduct)
//     .put("/products/:id", productControler.replaceProduct)
//     .patch("/products/:id", productControler.updateProduct)
//    .delete("/products/:id", productControler.deleteProduct)

// productRouter.post("/products", productControler.createProduct)
//     .get("/products", productControler.getProducts)
//     .get("/products/:id", productControler.getProduct)
//     .put("/products/:id", productControler.replaceProduct)
//     .patch("/products/:id", productControler.updateProduct)
//     .delete("/products/:id", productControler.deleteProduct)

server.listen(8080, () => {
    console.log("Server Start");
});