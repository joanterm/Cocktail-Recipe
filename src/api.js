updateUI = (data) => {
  const drinkData = data.drinks[0];
  console.log(drinkData);
  randomDrinkName.innerHTML = drinkData.strDrink;
  randomDrinkImage.src = drinkData.strDrinkThumb;
  randomDrinkRecipe.innerHTML = drinkData.strInstructions;

  let randomArray = [];
  for (let i = 1; i <= 15; i++) {
    if (drinkData[`strIngredient${i}`] === null) {
      break;
    }

    if (
      drinkData[`strMeasure${i}`] === null &&
      drinkData[`strIngredient${i}`] !== null
    ) {
      randomArray.push(drinkData[`strIngredient${i}`]);
    }

    if (
      drinkData[`strMeasure${i}`] !== null &&
      drinkData[`strIngredient${i}`] !== null
    ) {
      randomArray.push(
        drinkData[`strMeasure${i}`] + ' ' + drinkData[`strIngredient${i}`]
      );
    }

    console.log(randomArray);

    let ingredientList = '<div>';
    randomArray.forEach((element) => {
      ingredientList += '<div>' + element;
    });
    randomDrinkIngredient.innerHTML = ingredientList;
  }
};

const getAllDrinks = async () => {
  const [
    martiniPromise,
    whiskeySourPromise,
    cosmopolitanPromise,
  ] = await Promise.all([
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini'),
    fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=whiskey_sour'
    ),
    fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cosmopolitan'
    ),
  ]);
  const martini = await martiniPromise.json();
  const whiskeySour = await whiskeySourPromise.json();
  const cosmopolitan = await cosmopolitanPromise.json();

  const select = document.querySelector('#select');

  select.addEventListener('change', () => {
    if (select.value === 'margarita') {
      overlay.classList.remove('hidden');
      overlay.classList.add('flex');
      updateUI(martini);
    } else if (select.value === 'whiskey-sour') {
      overlay.classList.remove('hidden');
      overlay.classList.add('flex');
      updateUI(whiskeySour);
    } else if (select.value === 'cosmopolitan') {
      overlay.classList.remove('hidden');
      overlay.classList.add('flex');
      updateUI(cosmopolitan);
    }
  });
};

const randomRecipe = async () => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => {
      if (!response.ok) {
        throw Error(
          `Something went wrong, your error code is: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      updateUI(data);
    })
    .catch((error) => {
      return error;
    });
};

closeBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
  overlay.classList.remove('flex');
  randomRecipe();
});

randomBtn.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  overlay.classList.add('flex');
});

getAllDrinks();
randomRecipe();
