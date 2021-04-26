const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesName = () => {
    totalCategories.forEach(category => {
        console.log(`Категория: ${category.querySelector('h2').textContent}`);
        console.log(`Количество элементов: ${category.querySelectorAll('li').length}`);
    });
};
categoriesName();
