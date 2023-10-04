let checkedCategory = 'animals'

const addCategoryClickHandler = () => {
  const category = document.querySelector('.category');

  category.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('category__input')) {
      checkedCategory = target.value;
    }
  });
}

export {addCategoryClickHandler, checkedCategory};