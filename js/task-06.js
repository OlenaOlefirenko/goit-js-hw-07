const inputEl = document.querySelector('#validation-input');

const inputValidLength = Number(inputEl.dataset.length);

const onValidInputLength = function (event) {
  inputEl.classList.add('valid');
  if (event.currentTarget.value.length <= inputValidLength) {
    inputEl.classList.add('valid');
    // inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
};

inputEl.addEventListener('input', onValidInputLength);
// // console.log(inputEl);
