const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

//create server in express;
const express = require("express");
const morgan = require('morgan');//third party middleware
const server = express();

// server.use(morgan('dev'));
server.use(morgan('default'));
//bodyParser express.json is a application middleware
server.use(express.json());
// server.use(express.urlencoded()); //used for form data
server.use(express.static('public'));

//Web Api Or Endpoint
//Rest API API ROOT, base URL, 

//for post, patch, delete use postman
//Create API = POST = /products
server.post("/products", (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.json(req.body);
})

//Read GET = /products
server.get("/products", (req, res) => {
    res.json(products);
})
//Read GET = /products/:id
server.get("/products/:id", (req, res) => {
    console.log(req.params.id);
    const id = +req.params.id;
    const prd = products.find(p=>p.id === id);
    res.json(prd);
})

//Update PUT = /products/:id
server.put("/products/:id", (req, res) => {
    const id = +req.params.id;
    const prdIndex = products.findIndex(p=>p.id === id)
    products.splice(prdIndex,1,{...req.body, id:id})
    res.status(201).json({product:"Product Updated"});
}) 
//Update PATCH = /products/:id
server.patch("/products/:id", (req, res) => {
    const id = +req.params.id;
    const prdIndex = products.findIndex(p=>p.id === id)
    const prd1 = products[prdIndex];
    products.splice(prdIndex,1,{...prd1,...req.body})
    res.status(201).json({product:"Product Updated"});
}) 

//Delete DELETE = /products/:id
server.delete("/products/:id", (req, res) => {
    const id = +req.params.id;
    const prdIndex = products.findIndex(p=>p.id === id);
    const prd1 = products[prdIndex];
    products.splice(prdIndex,1)
    res.status(201).json({product:prd1});
}) 

server.get("/demo", (req, res) => {
    // res.send("<h1>Hello Express</h1>");
    // res.sendFile('/Users/Atish kumar sahu/desktop/Backend/index.html');
    // res.json(products);
    // res.sendStatus(404);
    // res.status(201).send("<h1>Hello Express</h1>");
})


server.listen(8080, () => {
    console.log("Server Start");
});