//Welcome to JS. One of the three web muskeeters. This is a comment.

alert("Welcome to JS");

//The extension for JS is .js. and I have linked HTML to conncect this to the browser because JS is different and browser is different so you need HTML to connect. 

console.log("Anything");//prints a message in the console. The message is the thing passed inside (). single and double quotes both are valid ('', "")
// A semicolon marks the end of a statement or instruction.

//Variables: They are containers for data with a name and value like:
variable = 12;
console.log(variable);//12

//Rules for variable names: only letters, digits, _ and $ are allowed. keywords(reserved) cant be names. digits cant be the first letter.

//let, const & var: ways to define variables

//var is old and can be re declared and updated.
//let can be updated but no re declaration.
//const cant be re declared and updated.
var age = 12;
let name = "ABCD";
const PI = 3.1415926535;

//Data types
//Number, string, boolean, undefined, null, bigint, symbol: primitive
let num = 45;//a number -> number
let str = "Hello";//word or letters -> string
let bool = true;//true or false -> boolean
let und = undefined;//undefined, nothing stored -> undefined. let und; expands to let und = undefined;.
let nul = null;//null -> object. but counted as null.
let big = BigInt("45");//bigger number(in JS limits) -> bigint. n in the end.
let sym = Symbol("ABCD");//special symbol -> symbol
console.log(typeof(num));
console.log(typeof(str));
console.log(typeof(bool));
console.log(typeof(und));
console.log(typeof(nul));//object not null
console.log(typeof(big));
console.log(typeof(sym));

//Difference in null and undefined: undefined means absence of value while null is intentionaly empty.

//object: non primitive
const Student = {
    name: "ABCD",
    age: 10,
    isPresent: true,
    id: Symbol("BD10")
};//collection of variables

console.log(typeof(Student));

//Accesing: student.key or student[key];
console.log(Student.age);
console.log(Student[age]);

//Changing
Student.isPresent = false;//Even if const
console.log(Student.isPresent);

//Practice 1
//Create a const object "product" to store the given information(in the picture at lecture 1 1:12:54).
const Product = {
    name: "Parke Jotter Standard CT Ball Pen",
    rating: 4,
    isDeal: true,
    price: 270,
    offer: 5
};

//Practice 2
//create a const object called "profile" to store information given(in the picture at lecture 1 1:18:39)
const Profile = {
    username: "Shradha Khapra",
    isFollow: true,
    folloers: 569000,
    following: 4
};

//END
console.log("END");