const container = document.querySelector('.container');

function newDiv(number) {
    numberFinal = 100/number;
    let div = document.createElement('div');
    div.style.backgroundColor = 'white';
    div.style.flexBasis = numberFinal + '%';
    div.style.border = '1px solid black';
    div.style.height = numberFinal + '%';
    return div
}


function grid(number) {
    container.innerHTML = '';
    for(let i = 0; i < (number * number); i++) {
        container.appendChild(newDiv(number));
    }

}


window.onload = grid(16)
