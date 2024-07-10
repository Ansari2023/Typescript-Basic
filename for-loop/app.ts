// For Loop
// for (1;2;3) {}   three value will be put inside the parentheces.

// Example 1

let n1:number = 3;

for (let i:number=0; i<10; i++) {
    console.log(n1*i)
}

console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
// Example 2
let n2:number = 4;

for (let im:number = 1; im<=10; im++) {
    console.log(`${n2} * ${im} = ${n2*im}`)
}

console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")

// Example 3
let n3:number = 5;
for (let imr:number = 1; imr<=10; imr++) {
    console.log(`${n3} * ${imr} = ${n3*imr}`)
    if (n3*imr == 35){
        break
    }
}
console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")

// Example 4;
let n4:number = 6;
for (let ah:number = 1; ah<=15; ah++){
    console.log(`${n4} * ${ah} = ${n4*ah}`)
    if (n4*ah == 66){
        break       // Break will be used for break value which you mention in paratheces. and condition of IF will be used.

    }
}
console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;")


// Second Mehtod of For Loop
let n5:number = 8;
for (let a:number = 1; a<=10; a++){
    let b:number =8;
    let ans = n5*a;
    console.log(b + " " + "x" + " " + a + " " + "=" + " " + ans)

}