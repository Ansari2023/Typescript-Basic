// Aurgument and parameters

let sum = (data1:number, data2:number, name:string) => {        // Parameters
    console.log(data1,data2,name);

}
sum(25,35,"Imran Ahmed");   // its Aurgument


// types of variables
// 1- var for function Scoped
// 2= let for block scoped
// 3= const for block scoped

let userName:string = "Imran";
let userName1 = "Ahmed";
let userName2 = "Ansari";
console.log(userName, userName1, userName2);

// Union Types
let mobile:string | number | boolean | undefined = "Tecno";
mobile = 456;
mobile = true;
mobile = undefined;
console.log(mobile);
