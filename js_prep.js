/*
innerHTML or innerText//write into an element
document.write()//write into the document
window.alert()//pop up an alert box
console.log()//write into the browser console
*/

let x=5;
let y;
y=10;
let z=x+y;
console.log(z);
//js uses lower camel case notation
//js variable can start with letter, _ or $
//js is case sensitive
//use let to declare variables
//use const to declare constants
//8 data types in js
//1. Number
//2. String
//3. Boolean
//4. Object
//5. BigInt
//6. Undefined
//7. Null
//8. Symbol
//js is dynamically typed language
if(z>10){
    console.log("z is greater than 10");
}
else{
    console.log("z is less than or equal to 10");
}
for(let i=0;i<5;i++){
    console.log(i);
}
//,length(),toUpperCase(),toLowerCase(),indexOf(),slice(),replace() are some string methods
function myFunction(a,b){
    return a+b;
}
console.log(myFunction(3,4));
//arrow functions
//let add=(a,b)=>{return a+b;};
//let add=(a,b)=>a+b;
