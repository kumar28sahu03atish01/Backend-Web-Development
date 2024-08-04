const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const jdata = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const product1 = jdata.products;
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if(req.url.startsWith('/product')){
        const pid = req.url.split('/')[2];
        const prd = product1.find(p=>p.id === (+pid));
        console.log(prd);
        res.setHeader('Content-Type', 'text/html');
        const p1 = index.replace('**title**',prd.title).replace('**price**',prd.price).replace('**img**',prd.thumbnail);
        res.end(p1);
        return;
    }
    switch(req.url){
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(jdata));
            break;
        case '/product':
            res.setHeader('Content-Type', 'text/html');
            const p1 = index.replace('**title**',product1.title).replace('**price**',product1.price).replace('**img**',product1.thumbnail);
            res.end(p1);
            break;
        default: 
            res.writeHead(404, "Not Found");
            res.end('404 Not Found');
    }
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});