const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    let filename = "";

    if (path === '/') {
        filename = "./index.html";
    } else {
        filename = `.${path}.html`;
    }

    fs.readFile(filename, (err, data) => {
        if (err) {
            fs.readFile('./404.html', (err404, data404) => {
                if (err404) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Internal Server Error");
                } else {
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.end(data404);
                }
            });
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });

}).listen(8000, () => console.log("Listening on Port 8000..."));
