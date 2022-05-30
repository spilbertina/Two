const first = document.querySelector('.first');
const second = document.querySelector('.second');
const equals = document.querySelector('.equals');
const result = document.querySelector('.result');
const cleareList = document.querySelectorAll('.cleare');
const mul = document.querySelector('.mul');

function cleareText(input1, input2, div) {
    input1.value = '';
    input2.value = '';
    div.textContent = '';
}


equals.addEventListener('click', () =>
    result.textContent = (+first.value) + (+second.value)
);

mul.addEventListener('click', () =>
    result.textContent = (+first.value) * (+second.value)
);


cleareList.forEach((cleareButton)=>{
    cleareButton.addEventListener('click', (event) => {
        const wrapper = event.target.parentElement;
        const firstInput = wrapper.querySelector('.first');
        const secondInput = wrapper.querySelector('.second');
        const resultDiv = wrapper.querySelector('.result');
    
        cleareText(firstInput, secondInput, resultDiv);
        console.log(firstInput, secondInput, resultDiv);
    });
});
