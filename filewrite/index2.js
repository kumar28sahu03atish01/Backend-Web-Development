const fs = require('fs').promises;

async function writeFile() {
    // Content to write to the file
    const content = 'Hello, world! index2.js';

    try {
        // Writing to a file named 'example.txt'
        await fs.writeFile('example2.txt', content);
        console.log('File written successfully');
    } catch (err) {
        console.error('Error writing to file', err);
    }
}

writeFile();