import { mult, div } from './lib2.mjs';

import('./lib1.cjs').then(({ sum, diff }) => {
    console.log(diff(20, 5));
    console.log(sum(100, 50));
    console.log(mult(10, 30));
    console.log(div(50, 5));
});