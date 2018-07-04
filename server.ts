let http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end('hello worldaa \n');
}).listen(8888);
console.log('server running in http://localhost:8888');

