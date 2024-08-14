"use strict";
// For Loop Method
Object.defineProperty(exports, "__esModule", { value: true });
for (let i = 1; i <= 10; i++) {
    let table = 4;
    let ans = table * i;
    console.log(table + " " + "x" + " " + i + " " + "=" + " " + ans);
}
// Nested For Loop Method
const prompt = require(`prompt-sync`)();
let n1 = parseInt(prompt(`Please Enter your Number`));
//let a:number = 5;
let b = "*";
for (let i = 1; i <= n1; i++) {
    console.log(i);
    b += "*";
    //b += "\n"           // \n will be used for Line Break in typesScript
    console.log(b);
}
