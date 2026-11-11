//Let's Begin

const dObject = {
    fullName: "undefined",
};//direct way of creating objects

//functions in them

const fPrintHello = {
    printHello: () => {
        console.log("Hello");
    },
};

/*Or
const fObject = {
    printHello : function printHello() {
        console.log("Hello");
    }
};


writing this in a object refers to the name of the object

keyword-count: 1

prototype gives a object functions including arrays because technically they are objects

*/

//GO!

const a = {
    n: 1,
};

const b = {
    n: 2,
};

const c = {
    n: 3,
};

const d = {
    n: 4,
};

const e = {
    n: 5,
};

a.__proto__ = fPrintHello;
b.__proto__ = fPrintHello;
c.__proto__ = fPrintHello;
d.__proto__ = fPrintHello;
e.__proto__ = fPrintHello;

//write the function with the same name to override the prototypes function

//CLASSES

class Toyota {
    constructor(brand) {//passed in the line of object creation(like __init__ of python)
        console.log("Creating new object...");
        this.brand = brand;//propertie
    };
    start() {
        console.log("start");
    };
    stop() {
        console.log("stop");
    };
};

let Toyota1 = new Toyota("Toyota");

Toyota1.start();

//keyword-count: 2

//classes are templates for objects

//constructor is called once when a object is created

//Inheritance

class Parent {
    Whop() {
        console.log("I am the Parent");
    };
};

class Child extends Parent {
    Whoc() {
        console.log("I am the child");
    };

};

//If child and Parent has the same function child's function is used

//chiild has functions of both Parent and child

//super

class Person {
    constructor() {
        console.log("Enter parent constructor");
        this.species = "Home sapiens";
    };
    eat() {
        console.log("eat");
    };
};

class Engineer extends Person {
    constructor(branch) {
        console.log("Enter Child Constructor");
        super();//to invoke parent class constructor
        this.branch = branch;
        console.log("Exit child constructor")
    };
    work() {
        console.log("Solve Problems");
    };
};

let anEngineer = new Engineer();
//keyword-counter: 3

//Practice 1

class User {
    constructor(name, eMail) {
        this.name = name;
        this.eMail = eMail;
    };
    viewData() {
        console.log(`Your name is ${name} and your e-Mail is ${eMail}`);
        ;
    }
};

//Practice 2

class Admin extends User {
    editData(nName, nEmail) {
        super();
        name = nName;
        eMail = nEmail;
    };
};