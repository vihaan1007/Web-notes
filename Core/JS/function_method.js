//Function: a block of code that can be reused anywhere in the file.
//Pre-defined: they are pre-defined in JS or modules
//User-defined: it is defined by the user 
//Defining functions using function:
function sum(a, b) {
    console.log(a+b);
    return a+b;
}
//sum is the name. (a, b) are the parameters: variables used inside function provided in call. then in {} comes the work. return, without printing, gives the value which can be put inside a variable and marks the end of function(of that scope).
sum(5, 6);//call name and the values in order for permimeters
a = sum(5,6);//stores the value because of return. without return it is undefined.
console.log(a);

//using arrow(modern JS)
const mul = (a, b) => {
    console.log(a*b);
    return a*b;
}

//Practice1:
//WAF(function) that takes a string and returns the number of vowels in it.
function vowels(str) {
    let count = 0;
    str = str.toLowercase();
    for(i of str) {
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            count++;
        }
    }
    return count;
}

//Practice2:
//do the same but with arrow
const vowels = (str) => {
    let count = 0;
    str = str.toLowercase();
    for(i of str) {
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            count++;
        }
    }
    return count;
}

//Method: a pre-defined function specifically for a data type. arr.method().

//forEach loops for Arrays: way to traverse
//a callback is a function passed as a argument of another function
let arr = [0, 1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111];
arr.forEach((val, idx/*arr can also be used*/) => {//callback. instead of defining there you can define before and pass it there.
    console.log(`The binary representation of ${idx} is ${val}`);
})
//forEach goes and does the work for each of the element

//Higher Order Functions/Methods are the functions which take a callback or return a function

//Practice1:
//for a given array of numbers print the square of each one
let sqr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sqr.forEach((sq) => {
   console.log(sq ** 2); 
});

//Map for Arrays: Creates a new Array with the results of the same operation. The value its callback returns used to form new array.
import {toBinary} from "./binary.js"
let oldArr = [0, 1, 2, 3, 4, 5];
let newArr = oldArr.map((val) => {
    return toBinary(val);
});
console.log(newArr);

//Filter for Arrays: filters a array for a condition and returns a new one
filArr = oldArr.filter((val) => {
    return val % 2 === 0;
})
console.log(filArr);

//Reduce for Arrays: Performs some operations & reduces the array to a single value and returns that.
const sum = oldArr.reduce((res, curr) => {
    return res+curr;//the answer is stored inside res and the loop continues with res being right before curr until all end.
});
console.log(sum);