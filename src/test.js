//THIS IS THE SAME FUNCTION BUT BUILT ORIGINALLY AS ASYNC/AWAIT + NOTES

async function randomRecipe() {
    const recipePromise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    
    if (recipePromise.ok) {
        const getRandom = await recipePromise.json();
        console.log(getRandom.drinks[0]) //ACCESSES VALUE OF .DRINKS[0] OF THIS API
        const randomDrink = getRandom.drinks[0] //ASSIGNS A FETCHED DRINK TO A VARIABLE
        randomDrinkName.innerHTML = randomDrink.strDrink //DRINK NAME WILL BE PLACED IN APPROPRIATE HTML LOC
        randomDrinkImage.src = randomDrink.strDrinkThumb //DRINK IMAGE WILL BE PLACED IN APPROPRIATE HTML LOC
        randomDrinkRecipe.innerHTML = randomDrink.strInstructions //DRINK INSTRUCTIONS WILL BE PLACED IN APPROPRIATE LOC


        //CREATES A RANDOMARRAY TO STORE THE FETCHED INGERDIENTS AND THEIR MEASUREMENTS
        let randomArray = [];
        //THERE ARE 15 POSSIBLE INGREGIENTS SO IT WILL LOOP THROUGH THEM ALL
        for(let i=1; i<=15; i++) {

            //IF THERE ARE "NULL" VALUES IN IGREDIENTS, IT WILL STOP THE LOOP
            if(randomDrink[`strIngredient${i}`]  === null) {
                break;
            }
            //IF THERE ARE NO MEASUREMENT AND THERE ARE INGREDIENTS, IT PUSHES JUST THE INGREDIENTS INTO THE ARRAY
            if(randomDrink[`strMeasure${i}`]  === null && randomDrink[`strIngredient${i}`] !== null) {
                randomArray.push(randomDrink[`strIngredient${i}`])
            }
            //IF THERE ARE INGREDIENTS AND THERE ARE MEASUREMENTS, IT PUSHES THEM BOTH IN THE ARRAY
            if(getRandom.drinks[0][`strMeasure${i}`]  !== null && getRandom.drinks[0][`strIngredient${i}`] !== null) {
                randomArray.push(randomDrink[`strMeasure${i}`] + " " + randomDrink[`strIngredient${i}`])
            }
            console.log(randomArray)
     
            //THIS CODE WILL ALLOW THE MEASUREMENT AND INGREDIENTS TO BE DISPLAYED VERTICALLY (AS A LIST)
            var str = "<div>"
            randomArray.forEach(function(element) { //put this in a variable 
                str += "<div>" + element 
            })
            str += "</div>"
            randomDrinkIngredient.innerHTML = str
        }
    }
}
randomRecipe(); //EXECUTES THE FUNCTION



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
getMartini();





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
getWhiskeySour();





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
getCosmopolitan();