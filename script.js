const first = document.querySelector('.first');
const second = document.querySelector('.second');
const equals = document.querySelector('.equals');
const result = document.querySelector('.result');
const cleare = document.querySelectorAll('.cleare');

const firstMult = document.querySelector('.first-mult');
const secondMult = document.querySelector('.second-mult');
const equalsMult = document.querySelector('.equals-mult'); 
const resultMult = document.querySelector('.result-mult'); 
// const cleareMult = document.querySelector('.cleare-mult');

function del() {
    first.value = '';
    second.value = '';

    result.textContent = '';
}

function delMult() {
    firstMult.value = '';
    secondMult.value = '';

    resultMult.textContent = '';
}

equals.addEventListener('click', 
() => result.textContent = (+first.value) + (+second.value));
equalsMult.addEventListener('click', 
() => resultMult.textContent = (+firstMult.value) * (+secondMult.value));
// cleare.addEventListener('click', del);
// cleareMult.addEventListener('click', delMult);

cleare.forEach(function(item) {
    item.addEventListener('click', del)
});
