const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
    const itemLiEl = document.createElement('li');
    ingredientsEl.appendChild(itemLiEl);
        itemLiEl.textContent = ingredient;   
});


