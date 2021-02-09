const closeBtn = document.querySelector('#close');
const randomBtn = document.querySelector('#open-random');
const overlay = document.querySelector('#overlay');
const randomDrinkName = document.querySelector('#random-drink-name');
const randomDrinkImage = document.querySelector('#random-drink-image');
const randomDrinkIngredient = document.querySelector('#random-drink-ingr');
const randomDrinkRecipe = document.querySelector('#random-drink-recipe');

closeBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
  overlay.classList.remove('flex');
  randomRecipe();
});

randomBtn.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  overlay.classList.add('flex');
});

const select = document.querySelector('#select');

select.addEventListener('change', () => {
  if (select.value === 'margarita') {
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
    getMartini();
  } else if (select.value === 'whiskey-sour') {
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
    getWhiskeySour();
  } else if (select.value === 'cosmopolitan') {
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
    getCosmopolitan();
  }
});

/*
  ----------
  SUGGESTION
  ----------
  
  As the code currently exists, you may only need the randomRecipe() call below
  
  When the 'change' and 'click' events above are called, the effects of these calls are replaced.
*/

// Get the recipes
randomRecipe();
getMartini();
getWhiskeySour();
getCosmopolitan();
