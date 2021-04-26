const inputEl = document.querySelector("#validation-input");

const inputValidLength = Number(inputEl.dataset.length);

const onValidInputLength = function (event) {
    if (event.currentTarget.value.length === inputValidLength) {      
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}

inputEl.addEventListener('blur', onValidInputLength);
// console.log(inputEl);


