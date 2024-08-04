const http = require('http');
const data = { name: "name1", age: 15 };
const server = http.createServer((req, res) => {
    console.log("Server Started!");

    console.log(req.url);

    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>HelloNodeJs</h1>');

    // res.setHeader('Content-Type','application/json');
    // res.end(JSON.stringify(data));
})
server.listen(8080);
//HTTP HEADERS LIST FROM MDN