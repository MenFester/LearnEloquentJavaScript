const { readFile, writeFile } = require("fs");

readFile("file.txt", "utf8", (error, text) => {
    if (error) {
        throw error;
    }
    console.log(text);
});

readFile("file.txt", (error, buffer) => {
    if (error) throw error;
    console.log("The file contained: ", buffer.length, "bytes.", "The first byte is: ", buffer[0]);
});

writeFile("graffiti.txt", "None was here", err => {
    if (err) console.log(`Failed to write file: ${err}`);
    else console.log("File written.");
});

const promises = require("fs").promises;    // 使用promise而不是回调函数

promises.readFile("file.txt", "utf8").then(text => console.log(text));