const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html','utf-8');
const jdata = fs.readFileSync('data.json','utf-8');
const data = { name: "name1", age: 15 };
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','application/json');
    // res.end(index);
    res.end(jdata);
})
server.listen(8080);
//HTTP HEADERS LIST FROM MDN