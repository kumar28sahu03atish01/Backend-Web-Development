const {sum, diff} = require('./lib1.cjs');
console.log(sum(10,20));
console.log(diff(80,60));

const esModule = "./lib2.mjs";
(async()=>{
    const {mult, div} = await import (esModule);
    console.log(mult(10,50));
    console.log(div(80,40));
})();