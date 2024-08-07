const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

exports.createProduct = (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.json(req.body);
}
exports.getProducts = (req, res) => {
    res.json(products);
}
exports.getProduct = (req, res) => {
    console.log(req.params.id);
    const id = +req.params.id;
    const prd = products.find(p=>p.id === id);
    res.json(prd);
}
exports.replaceProduct = (req, res) => {
    const id = +req.params.id;
    const prdIndex = products.findIndex(p=>p.id === id)
    products.splice(prdIndex,1,{...req.body, id:id})
    res.status(201).json({product:"Product Updated"});
}
exports.updateProduct = (req, res) => {
    const id = +req.params.id;
    const prdIndex = products.findIndex(p=>p.id === id)
    const prd1 = products[prdIndex];
    products.splice(prdIndex,1,{...prd1,...req.body})
    res.status(201).json({product:"Product Updated"});
}
exports.deleteProduct = (req, res) => {
    const id = +req.params.id;
    const prdIndex = products.findIndex(p=>p.id === id);
    const prd1 = products[prdIndex];
    products.splice(prdIndex,1)
    res.status(201).json({product:prd1});
}