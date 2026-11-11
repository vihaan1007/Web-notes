//window is a browser's object(not JS's) that has everything

window.console.log("Hello");//Console.log

//all html elements are JS's object whose name is Document

//conosle.log treats DOM differently and conosole.dir prints the properties

//DOM teaches us to dynamiclly change html

let header = document.getElementsByTagName("header");
let text = document.getElementsByClassName("text");
let p = document.getElementById("p");
//querySelector takes the first match
//querySelectorAll takes all match in a array
//In it tags are {tagName}, id are {#idName} and class are {.className}

console.log(`header: ${header}, text: ${text} and p: ${p}`);

//tagName gives the tagName
//innerText gives the text content of it and it's children
//innerHTML gives the plain text of html meaning with tags
//textContent is like innerText but can also give for hidden elements

//to change something

let change = document.querySelector("#change");
change.innerText = "Document Object Model";

/*
getAttribute gets the attribute and setAttribute gets and sets it like (get, set)
node.style.attr is for style style attr are same in css but converted in the camel case(firstSecondThird)
node.append add at the end of the node(inside)
node.prepend add at the start of the node(inside)
node.after add after the node(outside)
node.before add before the node(outside)
node.remove removes the node
document.createElement creates a element
*/

//This was the SMALLEST AND THE MOST IMPORTANT LESSON