const fs = require('fs');

// Content to write to the file
const content = 'Hello, world!';

// Writing to a file named 'example.txt'
fs.writeFile('example.txt', content, (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('File written successfully');
    }
});
