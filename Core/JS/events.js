//Events: detects a activity by the user and does some work on the website. OR .The change of a state of an object.
//mouse-events: click, dblclick
//keyboard-events: keydown, keyup, keypress and more.
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn1");
let w = document.querySelector("#w");

btn1.addEventListener("click", () => {//event and callback
  console.log("You clicked me");
  alert("Clciked once");
  btn1.style.backgroundColor = "red";
});

btn2.addEventListener("dblclick", () => {
  console.log("You clicked me twice");
  alert("clicked twice");
  btn2.style.backgroundColor = "red";
});

document.addEventListener("keydown", (e) => {//event variable
  if (e.key === "w" || e.key === "W") {
    console.log('You pressed "w"');
    w.style.backgroundColor = "yellow";
    alert('pressed "w"');
  }
});

//look for events on MDN docs