/* Control Statements in javascript help control the flow of execution in a program based on specific condition
They allow you to execute certain blocks of code, repeat actions or handle specific cases.
If the condition meets then a particular block of action will be executed otherwise it will execute another block of action that satisfies that particular condition
There are two types of control statement in javascript
They are conditional and looping statements */

/*#Conditional Statement
These statements execute code based on a certain condition
These statements are used for decision-making, a decision
n is made by the conditional statement based on an expression that is passed. Either YES or NO. 
Here, There are Four types of conditional statements.
They are,
 if statement
 if else statement
 if else if statement
 switch statement */

//#If Statement
//Executes a block of code if the condition is true
let final = "RCB"
if (final >= "RCB") {
console.log("RCB will lift the cup in this season")
}

//#If Else Statement
//Executes one block of code if the condition is true and another if it's false
let Final = "RCB"
if (Final <= "CSK") {
    console.log("RCB will not lift the cup in this season")
} else {
    console.log("RCB will lift the cup in this season") 
}
 
//#Else If Statement
//Executes the blocks of code if the condition1 is true, if not moves to condition2 and if condition2 also fails then, moves to another if both the condition1 and condition2 are false
let _final = 18
if (_final < 10) {
    console.log("not eligible")
} 
else if (_final != 18) {
    console.log("not selected")
}
else {
    console.log("RCB will lift the cup in this season")
}

//#Switch Statement
//Tests a variable against multiple values
//In some cases, using the switch case statement is seen to be more convenient than if-else statements.
let _Final = 18
switch (_Final) {
    case 1:
        console.log("CSK will lift the cup in this season")
        break;
    case 2:
        console.log("MI will lift the cup in this season")
        break;
    case 3:
        console.log("DC will lift the cup in this season")
    default:
        console.log("RCB will lift the cup in this season")
        break;
}

/*#Looping Statement
These are used to repeat a block of code multiple times
Loops in JavaScript are used to reduce repetitive tasks by repeatedly executing a block of code as long as a specified condition is true.
types of loop ---> for loop, while loop, do while loop, for in loop and for of loop */

//#For Loop
//The for loop repeats a block of code a specific number of times.
//It contains initialization, condition, and increment/decrement in one line.
/*Syntax:
for (initialization; condition; increment/decrement) {
    Code to execute
} */
for (let v = 20; v >= 18; v--) {
        console.log(v)
}
for (let v1 =18; v1 <= 20; v1++) {
     console.log(v1);
}

//#While Loop
//The while loop executes as long as the condition is true. It can be thought of as a repeating if statement. 
let k = 15;
while (k <= 18) {
    console.log(k);
    k++;
}
let k1 = 18;
while (k1 >= 15) {
    console.log(k1);
    k1--;
}

//#Do While Loop
//The do-while loop is similar to while loop except it executes the code block at least once before checking the condition.
let a = 5
do {
    console.log("RCB will win this season", a)
    a++
} while (a <= 10);
let a1 = 5
do {
    console.log("RCB will win this season", a1)
    a1--
} while (a1 >= 0);
