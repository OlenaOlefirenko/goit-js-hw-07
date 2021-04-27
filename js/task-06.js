const inputEl = document.querySelector('#validation-input');

const inputValidLength = Number(inputEl.dataset.length);

function onValidInputLength(event) {
  const currentValue = event.currentTarget.value.length;

  if (currentValue === inputValidLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
inputEl.addEventListener('blur', onValidInputLength);
