var http = require('http');



http.createServer(function handler(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('hi');
}).listen(8090,'localhost');
console.log('Svc Running at http://localhost:8090/');
