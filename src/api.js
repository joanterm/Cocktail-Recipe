//---------------------------------------------RANDOM DRINK PART OF THE PROJECT
function randomRecipe() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => {
          if (!response.ok) {
              throw Error(`Something went wrong, your error code is: ${response.status}`)
          }
        return response.json()
    }).then(data => {
        const randomDrink = data.drinks[0]
        console.log(randomDrink)
        randomDrinkName.innerHTML = randomDrink.strDrink 
        randomDrinkImage.src = randomDrink.strDrinkThumb 
        randomDrinkRecipe.innerHTML = randomDrink.strInstructions 

        let randomArray = [];
        for(let i=1; i<=15; i++) {

            if(randomDrink[`strIngredient${i}`]  === null) {
                break;
            }

            if(randomDrink[`strMeasure${i}`]  === null && randomDrink[`strIngredient${i}`] !== null) {
                randomArray.push(randomDrink[`strIngredient${i}`])
            }

            if(randomDrink[`strMeasure${i}`]  !== null && randomDrink[`strIngredient${i}`] !== null) {
                randomArray.push(randomDrink[`strMeasure${i}`] + " " + randomDrink[`strIngredient${i}`])
            }

            console.log(randomArray)
     
            
            let ingredientList = "<div>"
            randomArray.forEach((element) => { 
                ingredientList += "<div>" + element 
            })
            randomDrinkIngredient.innerHTML = ingredientList         
        }

    }).catch(error => {
        return error
    })
}

//---------------------------------------------FETCH MARTINI
async function getMartini() {
    const martiniPromise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini");
    
    if (martiniPromise.ok) {
        const getMartini = await martiniPromise.json();
        console.log(getMartini.drinks[0]) 
        const martiniDrink = getMartini.drinks[0]
        randomDrinkName.innerHTML = martiniDrink.strDrink
        randomDrinkImage.src = martiniDrink.strDrinkThumb
        randomDrinkRecipe.innerHTML = martiniDrink.strInstructions

        let martiniArray = [];
        for(let i=1; i<=15; i++) {
            if(martiniDrink[`strIngredient${i}`]  === null) {
                break;
            }
            
            if(martiniDrink[`strMeasure${i}`]  === null && martiniDrink[`strIngredient${i}`] !== null) {
                martiniArray.push(getMargarita.drinks[0][`strIngredient${i}`])
            }

            if(martiniDrink[`strMeasure${i}`]  !== null && martiniDrink[`strIngredient${i}`] !== null) {
                martiniArray.push(martiniDrink[`strMeasure${i}`] + " " + martiniDrink[`strIngredient${i}`])
            }

            console.log(martiniArray)
        }

        let ingredientList = "<div>"
        martiniArray.forEach((element) => {
            ingredientList += "<div>" + element 
        })
        randomDrinkIngredient.innerHTML = ingredientList
    }
}

//---------------------------------------------FETCH WHISKEY SOUR
async function getWhiskeySour() {
    const whiskeySourPromise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=whiskey_sour");
    
    if (whiskeySourPromise.ok) {
        const getWhiskeySour = await whiskeySourPromise.json();
        console.log(getWhiskeySour.drinks[0]) //will pull new drink 0 each time. "drinks" -> check API link
        const whiskeySourDrink = getWhiskeySour.drinks[0]
        randomDrinkName.innerHTML = whiskeySourDrink.strDrink
        randomDrinkImage.src = whiskeySourDrink.strDrinkThumb
        randomDrinkRecipe.innerHTML = whiskeySourDrink.strInstructions

        let whiskeSourArray = [];
        for(let i=1; i<=15; i++) {

            if(whiskeySourDrink[`strIngredient${i}`]  === null) {
                break;
            }
            
            if(whiskeySourDrink[`strMeasure${i}`]  === null && whiskeySourDrink[`strIngredient${i}`] !== null) {
                whiskeSourArray.push(getMargarita.drinks[0][`strIngredient${i}`])
            }

            if(whiskeySourDrink[`strMeasure${i}`]  !== null && whiskeySourDrink[`strIngredient${i}`] !== null) {
                whiskeSourArray.push(whiskeySourDrink[`strMeasure${i}`] + " " + whiskeySourDrink[`strIngredient${i}`])
            }

            console.log(whiskeSourArray)

            let ingredientList = "<div>"
            whiskeSourArray.forEach((element) => {
                ingredientList += "<div>" + element 
            })
            randomDrinkIngredient.innerHTML = ingredientList
        }
    }
}

//---------------------------------------------FETCH COSMOPOLITAN
async function getCosmopolitan() {
    const cosmopolitanPromise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cosmopolitan");
    
    if (cosmopolitanPromise.ok) {
        const getCosmopolitan = await cosmopolitanPromise.json();
        console.log(getCosmopolitan.drinks[0]) //will pull new drink 0 each time. "drinks" -> check API link
        const cosmopolitanDrink = getCosmopolitan.drinks[0]
        randomDrinkName.innerHTML = cosmopolitanDrink.strDrink
        randomDrinkImage.src = cosmopolitanDrink.strDrinkThumb
        randomDrinkRecipe.innerHTML = cosmopolitanDrink.strInstructions

        let cosmopolitanArray = [];
        for(let i=1; i<=15; i++) {
            if(cosmopolitanDrink[`strIngredient${i}`]  === null) {
                break;
            }
            
            if(cosmopolitanDrink[`strMeasure${i}`]  === null && cosmopolitanDrink[`strIngredient${i}`] !== null) {
                cosmopolitanArray.push(getMargarita.drinks[0][`strIngredient${i}`])
            }

            if(cosmopolitanDrink[`strMeasure${i}`]  !== null && cosmopolitanDrink[`strIngredient${i}`] !== null) {
                cosmopolitanArray.push(cosmopolitanDrink[`strMeasure${i}`] + " " + cosmopolitanDrink[`strIngredient${i}`])
            }

            console.log(cosmopolitanArray)
        }

        let ingredientList = "<div>"
        cosmopolitanArray.forEach((element) => {
            ingredientList += "<div>" + element 
        })
        randomDrinkIngredient.innerHTML = ingredientList
    }
}
