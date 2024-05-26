const fs = require("fs");
const fileName = "./sample_file.txt";

fs.writeFile(fileName, "THIS IS A SAMPLE TEXT FILE MADE FROM 'file.js'.", (err) => {
    if(err) {
        console.log(err);
    }
});