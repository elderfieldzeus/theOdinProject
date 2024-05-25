const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const data = url.parse(req.url, true).query;
    res.write(data.name + " " + data.age); //localhost:8000?name=Zeus&age=21
    res.end();
}).listen(8000, () => console.log("Listening on Port 8000..."));