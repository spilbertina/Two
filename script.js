const first = document.querySelector('.first');
const second = document.querySelector('.second');
const equals = document.querySelector('.equals');
const result = document.querySelector('.result');
const cleare = document.querySelector('.cleare');

const firstMult = document.querySelector('.first-mult');
const secondMult = document.querySelector('.second-mult');
const equalsMult = document.querySelector('.equals-mult'); 
const resultMult = document.querySelector('.result-mult'); 
const cleareMult = document.querySelector('.cleare-mult');

function sum() {
    let firstInput = +first.value;
    let secondInput = +second.value;

    result.textContent = firstInput + secondInput;
}

function del() {
    first.value = '';
    second.value = '';

    result.textContent = '';
}

function multiplication() {
    
       resultMult.textContent = +firstMult.value * +secondMult.value;
}

function delMult() {
    firstMult.value = '';
    secondMult.value = '';

    resultMult.textContent = '';
}

equals.addEventListener('click', sum);
cleare.addEventListener('click', del);
equalsMult.addEventListener('click', multiplication);
cleareMult.addEventListener('click', delMult);