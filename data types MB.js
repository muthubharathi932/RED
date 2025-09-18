/* Data types in javascript define a kind of data, a variable can hold.
Javascript has two main types of data 
the two types are ---> Primitive and Non Primitive data types*/

/* Primitive data types :
it stores a single value
these are immutable which the value cannot be changed once assigned
Types ---> Number, String, Boolean, Undefined, Null, Symbol and BigInt */

//#Number type
let a = 12;
a = 14.2;
console.log(typeof a) // Number ---> represents numeric values of both integers and floating point or decimal numbers
 
//#String type
b = 'JaVa ScRiPt';
console.log(typeof b) // String ---> represents textual data enclosed in a single or double quotes

//#Boolean type
let c = true;
c = false;
console.log(typeof c) // Boolean ---> represents a logical values whether true or false

//#Undefined type
let d
console.log(typeof d) // Undefined ---> a variable is declared but not assigned a value in it

//#Null type
let e = null;
console.log(typeof e) // Null ---> represents an intentional absence of any value

//#Symbol type
let f = Symbol('$');
console.log(typeof f) // Symbol ---> represents unique and immutable values, often used as object keys

//#BigInt type
let g = 123456n;
console.log(typeof g) // BigInt ---> represents integers larger than number. MAX_SAFE_INTEGER

/* Non Primitive data types :
these are objects and can store collections of data or more complex entities
Types ---> Array, Object and Function */

//#Array type
let h = [346,789,123,[654,890,["java","script","playwright"],198,568],781,999,]
console.log(h[3][2]) // "java","script","playwright"
console.log(h[3][4]) // 568
console.log(h[5]) // 999
console.log(typeof h[3][2][1]) // "script"
console.log(typeof h[4]) //781
// A Collection of values (elements) stored in an ordered list
// Square brackets [] are used gto define an array.

//#Object type
let i = {name:'Subash', age:27, gender:'male', education:{tenth:86, twelveth:87, be:{sem1:78, sem2:87, sem3:78, sem4:99},mba:{sem1:98, sem2:99, sem3:100}}}
console.log(i.education.mba.sem3)
console.log(i.education.be.sem2)
console.log(typeof i.gender)
console.log(typeof i.education.mba.sem1) //Dot notation
console.log(i['gender']) //Bracket notation
// A collection of key value pairs where each key is a string or symbol and the value can be any data
// curly braces {} are used to define an object

//#Function type 
function fun(){
    console.log("geeks for geeks")
}fun()
// Represents reusable blocks of code