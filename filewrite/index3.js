const fs = require('fs');

// Content to write to the file
const content = 'Hello, world! index3.js';

// Writing to a file named 'example.txt' with UTF-8 encoding
fs.writeFile('example3.txt', content, { encoding: 'utf8', mode: 0o666, flag: 'w' }, (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('File written successfully');
    }
});
