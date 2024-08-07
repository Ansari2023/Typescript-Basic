//Diifne array from diffenrent method.
// Simple Array Syntex is
// 1- let array = [] 

let array1:(string|number|boolean)[] = ["Imran", "Ahmed", "Ansari", 123, true]
console.log(array1[2])
console.log(array1.length)
console.log("Array1",array1)


//2- By Constructor mehtod
// New is a class of typescript
let array2 = new Array("Mushtaq", "Ahmed", "Ansari");
console.log("Array2", array2)

//3- By Array method.
let array3 = Array.of("Imran","Ahmed", "Ansari");
console.log("Array3", array3);

console.log("*********************************************")
// Nested Array method
let arr = ["Imran","Ahmed","Ansari",["Mushtaq","Ahmed","Ansari"]];
console.log("Array1",arr)
console.log("index 0",arr[0])
console.log("index 1",arr[1])
console.log("index 2",arr[2])
console.log("index 3",arr[3])
console.log("Nested Array index 0",arr[3][0])
console.log("Nested Array index 1",arr[3][1])
console.log("Nested Array index 2",arr[3][2])

console.log("*********************************************")

// Array Method
// 1- Push()      for used any data induction in Array at Last index position.
// 2- Pop()       fro used Removed any data in Array at Last index position.
// 3- Shift()     fro used Removed any data in Array at First index position.
// 4- UnShift()   for used any data induction in Array at First index position.


// 1- Push()      for used any data induction in Array at Last index position.
let array4:string[] = ["Imran","Ahmed",]
console.log(array4);
array4.push("Ansari");
console.log(array4.push());      // For Return Value
console.log(array4);

console.log("*********************************************")

// 2- Pop()       fro used Removed any data in Array at Last index position.
let array5:string[] = ["Imran","Ahmed","Ansari"]
console.log(array5);
array5.pop();
console.log(array5.pop());      // For Return Value
console.log(array5);

console.log("*********************************************")

// 3- Shift()     fro used Removed any data in Array at First index position.
let array6:string[] = ["Imran","Ahmed","Ansari"]
console.log(array6);
array6.shift();
console.log(array6.shift());      // For Return Value
console.log(array6);

console.log("*********************************************")

// 4- UnShift()   for used any data induction in Array at First index position.
let array7:string[] = ["Imran","Ahmed","Ansari"]
console.log(array7);
array7.unshift("Son of Mushtaq Ahmed");
console.log(array7.unshift());      // For Return Value
console.log(array7);

console.log("*********************************************")

// Slice Method
// The Slice() method return a selected element in an array. as a new array.
// The Slice() method does not change the orignal array.
// The Slice() method return selected elements.

let array8 = ["Mushtaq","Ahmed","Ansari","Iftikhar","Ahmed","Ansari"]
console.log(array8)
let newarray = array8.slice(1,5)
console.log(newarray)

console.log("*********************************************")

// Splice Method
// The splice() method add and removed array elements
// The splice() method overwrite the original array.
// return deleted element in array.

let array9:string[] = ["Iftikhar","Ahmed","Ansari","age","35","years"]

let deletedelement = array9.splice(1,2,"Usman","Jameel")

console.log("New",array9)
console.log("Reutrned",deletedelement); // Returned Value Ahmmed and Ansari.