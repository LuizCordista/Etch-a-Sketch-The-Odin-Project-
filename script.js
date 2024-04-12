const container = document.querySelector('.container');
let color = "black";


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
    container.innerHTML = '';
    for(let i = 0; i < (number * number); i++) {
        container.appendChild(newDiv(number));
    }
    const paints = document.querySelectorAll('.paint');

    paints.forEach(paint => {
        paint.addEventListener('mouseover', () => {
            paint.style.backgroundColor = color;
        })
    })
}

const button = document.querySelector('button');

button.addEventListener("click", () => {
    let number = prompt("Quantos quadrados por lado?");
    grid(number);
})


window.onload = grid(16)

