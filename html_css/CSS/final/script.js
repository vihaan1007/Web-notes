let p = document.querySelector("#pa");
let b = document.querySelector("#a");
let l = document.querySelector("#light");
let d = document.querySelector("#dark");
const root = document.documentElement;

l.addEventListener("click", () => {
    root.style.setProperty("--Color", "rgb(30, 30, 30)");
    root.style.setProperty("--BackgroundColor", "whitesmoke");
});

d.addEventListener("click", () => {
    root.style.setProperty("--Color", "whitesmoke");
    root.style.setProperty("--BackgroundColor", "rgb(60, 60, 60)");
});     