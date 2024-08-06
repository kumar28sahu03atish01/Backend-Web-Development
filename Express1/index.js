const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

//create server in express;
const express = require("express");
const server = express();

server.get("/",(req, res)=>{
    res.send("<h1>Hello Express</h1>");
    res.sendFile('/Users/Atish kumar sahu/desktop/Backend/index.html');
    res.json(products);
    res.sendStatus(404);
    res.status(201).send("<h1>Hello Express</h1>");
})


server.listen(8080, ()=>{
    console.log("Server Start");
});