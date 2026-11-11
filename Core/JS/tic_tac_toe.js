alert("hello to tic tac toe");

//Vars

const b = document.querySelector(".b");
let o = [];
let x = [];
const pl = "O";
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];

b.addEventListener("onclick", () => {
    const a = event.target.dataset.num;
    let b = event.target;
    let c = b.getAttribute("color");

    if (pl == "O") {
        pl = "X";
        b.innerText = "O";
        c = rgb(0, 255, 0);
        o.append(a);
        for (i of o) {

        }
    } else if (pl == "X") {
        pl = "O";
        b.innerText = "X";
        c = rgb(255, 0, 0);
        x.append(a);
    }
})