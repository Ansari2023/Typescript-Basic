"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require("prompt-sync")();
let n1 = parseInt(prompt(`Please enter your first number:`));
let n2 = parseInt(prompt(`Please enter your second number:`));
let operator = prompt(`Please enter any one Operator (+ - * /):`);
if (operator == "+") {
    console.log(`Result is ${n1} ${operator} ${n2} = ${n1 + n2}`);
}
else if (operator == "-") {
    console.log(`Result is ${n1} ${operator} ${n2} = ${n1 - n2}`);
}
else if (operator == "*") {
    console.log(`Result is ${n1} ${operator} ${n2} = ${n1 * n2}`);
}
else if (operator == "/") {
    console.log(`Result is ${n1} ${operator} ${n2} = ${n1 / n2}`);
}
else {
    console.log("Please Select Corret Key");
}
