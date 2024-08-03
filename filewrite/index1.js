const fs = require('fs').promises;

// Content to write to the file
const content = 'Hello, world! index1.js';

// Writing to a file named 'example.txt'
fs.writeFile('example1.txt', content)
    .then(() => {
        console.log('File written successfully');
    })
    .catch((err) => {
        console.error('Error writing to file', err);
    });
