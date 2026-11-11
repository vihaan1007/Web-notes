alert("Operators and Conditional");
//Operators: Used to perform operations on data like add, etc.

//Arithemetiic operatos: used to perform arithemetical operations. These include: +, -, *, /, %, **, ++, --
//Most of them take two operands(data to operate) while ++, -- take only one. They are unary operators

let a = 4;
let b = 2;
console.log(a+b);//6: add
console.log(a-b);//2: subtract
console.log(a*b);//8: multiply
console.log(a/b);//2: divide
console.log(a%b);//0: reminder
console.log(a**b);//16: exponent
a++;//increament; add 1. after everything executes on line.
a--;//decreament; subtract 1. after everything executes on line.
++b;//increament; add 1. before everything executes on line.
--b;//decreament; subtract 1. before everything executes on line.

//Assignment operators: used to change or assign values. These include =, +=, -=, *=, /=, %=, **=
a = 4;//also assignment
b = 2;
a += b;//a = 6
console.log(a);
a -= b;//a = 4
console.log(a);
a *= b;//a = 8
console.log(a);
a /= b;//a = 4
console.log(a);
a %= b;//a = 0
console.log(a);
a = 4;
a **= b;//a = 16
console.log(a);
a = 4;

//Comparison Operators: Used to check equaity or compare on values. returns true or false. These include: ==, !=, ===, !==, <, >, <=, >=.
console.log(a == b);//false. equal value.
console.log(a != b);//true. not equal value.
console.log(a === b);//false. equal value and type.
console.log(a !== b);//true. not equal value and type.
console.log(a > b);//true. greater than.
console.log(a < b);//false. less than.
console.log(a >= b);//true. greater then or equal to.
console.log(a <= b);//false. less than or equal to.

//Logical operators: Used to perform logical operations on boolean values. returns true or false. These include: &&, ||, !.
a = true;//1
b = false;//0
console.log(a && b);//false. Logical AND: both values must be true.
console.log(a || b);//true. Logical OR: any one true is enough.
console.log(!a);//false. Logical NOT: flips values true -> false, false -> true.

//Bitwise Operators: Used to perform logical operations on binary. returns binary numbers. These include: &, |, ~, ^, <<, >>.
//Binary system has only 2 symbols- 0 and 1 so it is base 2 or binary. Our number system has 10 0-9 so it is base 10 or decimal. In decimal place values are powers of 10- 1, 10, 100, 1000, 10000. So in binary it is powers of 2- 1, 2, 4, 8, 16, 32, 64. so the expanded form of 1011 in decimal is 1 * 1000 + 0 + 1 * 10 + 1 while in binary it is 1 * 8 + 0 + 1 * 2 + 1 = 11.

a = 0b1101;
b = 0b1010;
console.log(a.toString());
console.log(b.toString());
console.log(a & b);//1000. and: go place by place checking if both are 1.
console.log(a | b);//1111. or: go place by place checking if any one is 1.
console.log(a ^ b);//0111. xor: go place by place checking if only one is 1 if both are 1 then 0.
console.log(~a);//....(too large). not: go place by place flipping 1 to 0 and 0 to 1. all 32 bits whether they are hidden the outcome = -(n+1)
console.log(a << 1);//11010. left shift: shift by the number given(adding 0 at the end) it's outcome = n * pow(2, k).
console.log(a >> 1);//01101. right shift: shift by the number given(adding 0 at the start) it's outcome = n \ pow(2, k).

//Conditional statement: implements some condition in code.

//traffic light:
let light = "pink";
if(light === "red") {
    console.log("STOP, Red light");
} else if(light === "yellow") {
    console.log("WAIT, Yellow light");
} else if(light === "green") {
    console.log("GO, green light");
} else{
    console.log("Your light is broken");
}

//if runs if the condition is true if false then one by one else if try if nothing works then else is always true.

//Ternary operator: Takes 3 values instead of 2 or 1. syntax: condition ? true : false.
let age = 20;
//|   a   |             b            |             c             |
age >= 18 ? console.log("Can drive") :console.log("Cannot drive");//b runs if a is true and c runs if a is false.

//switches
switch (light) {
    case "Red":
        console.log("STOP, Red light");
        break;
    case "Yellow":
        console.log("WAIT, Yellow light");
        break;
    case "Green":
        console.log("Go, green light");
        break;
    default:
        console.log("Your light is broken");
}//Another way for conditional statement one after another default is always true.

//Practice 1
//Get user to input a number. Check if it is a multiple of 5 or not.
let pra1 = prompt("Enter a number: ");
pra1 % 5 === 0 ? console.log("Is a multiple of 5") : console.log("Is not a multiple of 5");

//END
console.log("END");