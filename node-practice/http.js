const http = require("http");

http.createServer((req, res) => {
    try {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("Hello HTTP!!!");
        res.end();
    }
    catch(err) {
        res.writeHead(400, {"Content-Type": "text/html"});
        res.end("ERROR");
    }
}).listen(8000, () => console.log("Listening on Port 8000..."));