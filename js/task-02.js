const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector(`#ingredients`);

const addListItems = ingredients => {
  const ingredientList = ingredients.map(ingredient => {
    const itemLiEl = document.createElement('li');
    itemLiEl.textContent = ingredient;
    return itemLiEl;
  });
  ingredientsEl.append(...ingredientList);
};

addListItems(ingredients);
