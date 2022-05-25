const first = document.querySelector('.first');
const second = document.querySelector('.second');
const button = document.querySelector('.button');
const result = document.querySelector('.result');


button.addEventListener('click', sum);
function sum() {
    let firstInput = +first.value;
    let secondInput = +second.value;

    result.textContent = firstInput + secondInput;
}
