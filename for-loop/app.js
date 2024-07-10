"use strict";
// For Loop
// for (1;2;3) {}   three value will be put inside the parentheces.
Object.defineProperty(exports, "__esModule", { value: true });
// Example 1
let n1 = 3;
for (let i = 0; i < 10; i++) {
    console.log(n1 * i);
}
console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;");
// Example 2
let n2 = 4;
for (let im = 1; im <= 10; im++) {
    console.log(`${n2} * ${im} = ${n2 * im}`);
}
console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;");
// Example 3
let n3 = 5;
for (let imr = 1; imr <= 10; imr++) {
    console.log(`${n3} * ${imr} = ${n3 * imr}`);
    if (n3 * imr == 35) {
        break;
    }
}
console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;");
// Example 4;
let n4 = 6;
for (let ah = 1; ah <= 15; ah++) {
    console.log(`${n4} * ${ah} = ${n4 * ah}`);
    if (n4 * ah == 66) {
        break; // Break will be used for break value which you mention in paratheces. and condition of IF will be used.
    }
}
console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;");
// Second Mehtod of For Loop
let n5 = 8;
for (let a = 1; a <= 10; a++) {
    let b = 8;
    let ans = n5 * a;
    console.log(b + " " + "x" + " " + a + " " + "=" + " " + ans);
}
