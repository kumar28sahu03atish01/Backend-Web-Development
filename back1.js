const fs = require('fs');
const t1 = performance.now();
const text = fs.readFileSync('demo.txt', 'utf8');
console.log(text);

const t2 = performance.now();
fs.readFile('demo.txt', 'utf8',(err, txt)=>{
    console.log(txt);
});
console.log(t2-t1);
console.log(`t1: ${t1} t2: ${t2}`);