const refs = {
    inputEl: document.querySelector('[type="number"]'),
    btnMakeEl: document.querySelector('[data-action="render"]'),
  btnClearEl: document.querySelector('[data-action="destroy"]'),
  boxesEl: document.querySelector('#boxes'),
};

function BtnMakeBoxes() {
    refs.boxesEl.innerHTML = '';

    const num = refs.inputEl.value;
    const items = [];

    for (let i = 1; i <= num; i += 1) {
        const createDiv = document.createElement('div');

        createDiv.style.backgroundColor = `rgba(${ random() }, ${ random() }, ${ random() })`;
        createDiv.style.width = (i * 10) + 20 + 'px';
        createDiv.style.height = (i * 10) + 20 + 'px';

        items.push(createDiv);
    }

    refs.boxesEl.append(...items);
}

const BtnClearBoxes = () => {
    refs.boxesEl.innerHTML = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}

refs.btnMakeEl.addEventListener('click', BtnMakeBoxes);
refs.btnClearEl.addEventListener('click', BtnClearBoxes);

