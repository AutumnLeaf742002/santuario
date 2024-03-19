const categoriesBlock = document.querySelector('.categories__list');

const categoriesList = categoriesBlock.querySelector('.list');

const categories = categoriesList.querySelectorAll('.category__item');

const clearCategoriesBtn = document.querySelector('.clean__category__filter__btn');

categories.forEach(category => {
    
    category.addEventListener('click', () => {
        clearCategories();
        category.setAttribute('selected', 'true');
        clearCategoriesBtn.removeAttribute('disabled');
    })
})

clearCategoriesBtn.addEventListener('click', () => {
    clearCategories();
});

const clearCategories = () => {
    categories.forEach(category => {
        category.setAttribute('selected', 'false');
        clearCategoriesBtn.setAttribute('disabled', 'true');
    })
}
