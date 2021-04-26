const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const onInputChange = (event) => {
    refs.output.textContent = refs.input.value === "" ? "незнакомец" : event.currentTarget.value;

}

refs.input.addEventListener("input", onInputChange);
