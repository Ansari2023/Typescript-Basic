//Name Function

function funcName():string {
    return "Imran Ahmed Ansari"
}
let user:string = funcName()
console.log(user);

console.log(".........................................................")

function funcName1():number {
    let total:number = 5+5;
    return total;
}
let user1:number = funcName1()
console.log(user1);

console.log(".........................................................")

//Aero Function
let aerowFunc:()=>string = ():string=>{
    let data:string = "Mushtaq Ahmed Ansari";
    return data

}

console.log(aerowFunc());

console.log(".........................................................")

let aerowFunction:()=>number = ():number=>{
    let total:number = 2+4+5;
    return total;
}
console.log(aerowFunction());

console.log(".........................................................")

let myfunc:()=>number = () => {
    let value:number = 7 + 8;
    return value;
}
let result:number = myfunc();
console.log("Result", result);

console.log(".........................................................")

let usr:() => number = () => (8 * 3);       //One line syntex with call back function
let data = usr();
console.log(data);

console.log(".........................................................")

let amount: () => number = ()=>{
    return 5 * 8;
}
let tottal = amount();
console.log(tottal);

console.log(".........................................................")
