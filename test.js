/* Testing...Hello, World! program in node.js */

const http = require("http");
http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello World");
}).listen(process.env.PORT || 3000);

console.log("Testing...Hello, World!")