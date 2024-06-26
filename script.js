const container = document.querySelector('.container');
let colors = ["red", "orange", "yellow", "green", "blue"];
let colorCount = 0;
let option = "black"

function newDiv(number) {
    numberFinal = 100/number;
    let div = document.createElement('div');
    div.style.backgroundColor = 'white';
    div.style.flexBasis = numberFinal + '%';
    div.style.border = '1px solid black';
    div.style.height = numberFinal + '%';
    div.className = "paint";
    return div
}


function grid(number) {
    container.innerHTML = "";
    for(let i = 0; i < (number * number); i++) {
        container.appendChild(newDiv(number));
    }
    const paints = document.querySelectorAll(".paint");

    paints.forEach(paint => {
        paint.addEventListener("mouseover", () => {
            if (option == "rainbow") {
                if (colorCount == 5) {
                    colorCount = 0
                    }
                paint.style.backgroundColor = colors[colorCount];
                colorCount++;
            }
            else {
                paint.style.backgroundColor = option
            }
        })
    })
}


const newGrid = document.querySelector(".newgrid");

newGrid.addEventListener("click", () => {
    let number = prompt("Quantos quadrados por lado? (max 100)");
    if (number > 100) {
        number = prompt("Por favor escolha um número menor que 100.")
    }
    grid(number);
})


const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    const paints = document.querySelectorAll(".paint");
    paints.forEach(paint => {
        paint.style.backgroundColor = "white"
    })
})

const rainbow = document.querySelector(".rainbow")
rainbow.addEventListener("click", () => {
    option = "rainbow"
})

const black = document.querySelector(".black")
black.addEventListener("click", () => {
    option = "black"
})


window.onload = grid(16)
