const refs = {
  controlFont: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};


function fontSizeControl(event) {
    refs.textEl.style.fontSize = event.currentTarget.value + "px";
};

refs.controlFont.addEventListener("input", fontSizeControl);
