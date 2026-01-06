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

//method chaining
let str="Hello World";
let result=str.toUpperCase().slice(0,5).replace("HELLO","HI");
console.log(result);
//spread operator
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[...arr1,...arr2];
console.log(arr3);
//destructuring
let [a,b,c]=arr1;
console.log(a,b,c);
//object destructuring
let person={name:"John",age:30};
let {name,age}=person;
console.log(name,age);
//callback functions: functions passed as arguments to other functions
function greet(name,goodnightCallback){
    console.log("Hello "+name);
    goodnightCallback();
}
function goodnight(){
    console.log("Goodnight!");
}
greet("Alice",goodnight);
//class
class Animal{
    constructor(name){
        this.name=name;
    }       
    speak(){
        console.log(this.name+" makes a noise.");
    }   
}
//synchronous vs asynchronous
//synchronous code runs sequentially
//asynchronous code runs independently
setTimeout(()=>{
    console.log("This is asynchronous code.");
},2000);
console.log("This is synchronous code.");
//promises..
