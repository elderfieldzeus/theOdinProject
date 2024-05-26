// const http = require("http");
// const url = require("url");
// const fs = require("fs");
// const path = require("path");

// http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true);
//     let pathname = `.${parsedUrl.pathname}`;
//     const ext = path.parse(pathname).ext;

//     if (pathname === './') {
//         pathname = './index.html';
//     }
//     else if (ext != '.css') {
//         pathname = `./${pathname}.html`;
//     }

//     // Map file extensions to MIME types
//     const mimeTypes = {
//         '.html': 'text/html',
//         '.css': 'text/css',
//         '.js': 'text/javascript',
//         '.png': 'image/png',
//         '.jpg': 'image/jpeg',
//         '.gif': 'image/gif',
//     };

//     fs.readFile(pathname, (err, data) => {
//         if (err) {
//             fs.readFile('./404.html', (err404, data404) => {
//                 if (err404) {
//                     res.writeHead(500, { "Content-Type": "text/plain" });
//                     res.end("Internal Server Error");
//                 } else {
//                     res.writeHead(404, { "Content-Type": mimeTypes[ext] || 'text/html'  });
//                     res.end(data404);
//                 }
//             });
//         } else {
//             res.writeHead(200, { "Content-Type": mimeTypes[ext] || 'text/html' });
//             res.end(data);
//         }
//     });

// }).listen(8000, () => console.log("Listening on Port 8000..."));

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname)));

app.get(['/', '/index'], (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, 'index.html'));
}); 

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(8000, () => console.log("Listening on Port 8000..."));