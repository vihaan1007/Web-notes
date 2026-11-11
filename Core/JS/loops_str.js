//Loops: Loops are used to execute a piece of code again and again.
//For loop
for(let i = 1; i < 6; i++) {
    console.log(i);
}
//first comes initialization then condition to that if False then stop and finally a updation so that condition becomes false at a point. and the work inide {}. the variable does not survive after the loop is terminated unless if declared with var.
console.log("Loop End");

//EX- sum
let sum;
for(let i = 1; i < 6; i++) {
    sum += i;
}
console.log(sum);
console.log("Loop End");

//A loop which never ends is a infinite loop, it is very dangerous.

//While loop
let count = 1;
while(count <= 5) {
    console.log(i);
    i++;
}
console.log("Loop End");
//Kick the initialization out. Kick the updation in. Put the condition in () after while. do work right before updation in {}.  

//do-while loop
count = 6;
do{
    console.log(count);
    count++;
} while(count < 6);
console.log("Loop Ends");
//do-while runs at least one time even if the condition is false on first iteration.

//for-of loop: iterates a string or array
let s1 = "Apna College";
let size = 0;
for(let i of s1) {
    console.log(i);
    size++;
}
console.log(size);
console.log("Loop Ends");

//for-in loop: iterates a object
let obj = {
    "name": "aa",
    "age": 5
}
for(let i of obj) {
    console.log(`${i}: ${obj[i]}`);
}

//Practice
//Print all even numbers from 0 to 100
let i = 0;
do {
    console.log(i);
    i+=2;
} while(i < 101)
console.log("Loop Ends");

//Strings: they are IMMUTABLE
//String is a sequence of charachters used to represent text
let str = "  Apna College  ";
//         0123456789ABCDEF (in hexadecimal)
//Length: str.length
console.log(str.length);
//Indices
console.log(str[5]);

//Teplate literals: A way to have embedded expressions in strings. use `` and ${expression} for expressions
//escape charachters: \n: newline, \t: tab size they are counted as one charachter
//String methods

str = str.toUpperCase();//Upper case
console.log(str);//"  APNA COLLEGE  "

str = str.toLowerCase();//Lower case
console.log(str);//"  apna college  "

str = str.trim();//remove whitespace from start and end only
console.log(str);//"apna college"

let slst = str.slice(0, 4);//Returns a part of string from starting to ending index
console.log(slst);//"apna"

let str1 = "Apna";
let str2 = " College";
str1 = str1.concat(str2);//joins up strings
console.log(str1);//"Apna College"

str = str.replace("l", "e");//replaces the starting value with replacing value 1time. replaceAll does until end
console.log(str);//"apna coeeege"

console.log(str.charAt(9));//Tells the charachter at the idx. "e"

//Practice1:
//Prompt th user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with their full name length
let fullName = prompt("Enter your full name: ");
let userName = `@${fullName.replaceAll(" ", "")}${(fullName.replaceAll(" ", "")).length}`;
console.log(userName);