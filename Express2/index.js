const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

//create server in express;
const express = require("express");
const morgan = require('morgan');//third party middleware
const server = express();

//custom middleware
// server.use((req, res, next) => {
//     console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'));
//     next()
// })

// server.use(morgan('dev'));
server.use(morgan('default'));

//bodyParser express.json is a application middleware
server.use(express.json());
// server.use(express.urlencoded()); //used for form data
server.use(express.static('public'));

//route middleware
const auth = (req, res, next) => {
    // console.log(req.query);
    // if(req.query.password === "123"){
    //     next()
    // } else {
    //     res.sendStatus(401);
    // }

    // if (req.body.password === "123") {
    //     next()
    // } else {
    //     res.sendStatus(401);
    // }

    next();
}

//Web Api Or Endpoint
server.get("/product/:id", auth, (req, res) => {
    console.log(req.params);
    res.json({ type: 'GET' });
})

//for post, patch, delete use postman
server.post("/", auth, (req, res) => {
    res.json({ type: 'POST' });
})

server.put("/", (req, res) => {
    res.json({ type: 'PUT' });
})

server.delete("/", (req, res) => {
    res.json({ type: 'DELETE' });
})

server.patch("/", (req, res) => {
    res.json({ type: 'PATCH' });
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